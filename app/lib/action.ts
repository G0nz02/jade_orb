'use server'

import prisma from "@/db";
import bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

const userFormSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  email: z.string(),
  date: z.string(),
});

const huntFormSchema = z.object({
  id: z.string(),
  username: z.string(),
  dexnum: z.coerce.number(),
  encounters: z.coerce.number(),
  ongoing: z.boolean(),
  game: z.string(),
  method: z.string(),
})

const CreateNewHunt = huntFormSchema.omit({ id: true, username: true, encounters: true ,ongoing: true });
const CreateUser = userFormSchema.omit({ id: true, date: true });

export async function createHunt(formData: FormData) {
  const {dexnum, game, method} = CreateNewHunt.parse({
    dexnum: formData.get('dexnum'),
    game: formData.get('game'),
    method: formData.get('method'),
  });

  const userEmail = (await auth())?.user?.email;
  if (!userEmail) {
    console.log("Unable to pull user's email.");
    return;
  }

  console.log(userEmail, dexnum, 0, true, game, method);
  await insertHunt(userEmail, dexnum, 0, true, game, method).catch(async (e) => {
    console.error('Unable to create new hunt:', e);
    throw new Error('Unable to create new hunt');
  });
  revalidatePath('/dashboard/hunts');
  redirect('/dashboard/hunts');
}

export async function createUser(formData: FormData) {
  const {username, email, password, confirmPassword} = CreateUser.parse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirm-password')
  });

  if (password !== confirmPassword) {
    console.log('Passwords do not match');
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const date = new Date();
  const userExists = await getUser(username);

  if (userExists) {
    console.log('User already exists');
    return;
  }

  await insertUser(username, email, hashedPassword, date).catch(async (e) => {
    console.error("Failed to create user:", e);
    throw new Error("Failed to create user.");
  });

  revalidatePath('/login');
  redirect('/login');
}

export async function authenticate(formData: FormData) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch(error.type) {
        case 'CredentialsSignin':
          return 'Invalid Credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

// Seperate functions dedicated to queries feels unnecessary?
// Perchance scrap these and put queries in bigger functions considering these arent called in more than one function so far
async function getUser(user: string) {
  const query = await prisma.users.findFirst({
    where: {
      username: user
    }
  });

  return query;
}

async function insertUser(user: string, email: string, pass: string, date: Date) {
  const query = await prisma.users.create({
    data: {
      username: user,
      email: email,
      password: pass,
      created: date,
    },
  });

  return query;
}

async function insertHunt(user: string, dex: number, enc: number, ongoing: boolean, game: string, method: string) {
  const query = await prisma.hunts.create({
    data: {
      user_email: user,
      dexnum: dex,
      encounters: enc,
      ongoing: ongoing,
      game: game,
      method: method,
    },
  });

  return query
}
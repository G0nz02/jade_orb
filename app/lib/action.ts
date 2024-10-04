'use server'

import prisma from "@/db";
import bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { z } from "zod";
import { hash } from "crypto";
import { users } from "@prisma/client";

const userFormSchema = z.object({
  id: z.string(),
  username: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  email: z.string(),
  date: z.string(),
});

const CreateUser = userFormSchema.omit({ id: true, date: true })
const ReturningUser = userFormSchema.omit({ id: true, confirmPassword: true, date: true})

export async function createUser(formData: FormData) {
  const {username, email, password, confirmPassword} = CreateUser.parse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirm-password')
  })

  if (password === confirmPassword) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const date = new Date();

    const temp = await getUser(username);
    if (!temp) {
      insertUser(username, email, hashedPassword, date).catch(async (e) => {
        console.error("Failed to create user: ", e);
        throw new Error("Failed to create user.");
      })

      revalidatePath('/login');
      redirect('/login');
    } else {
      console.log('User already exists');
    }
  } else {
    console.log('Passwords do not match');
  }
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

async function getUser(user: string) {
  const q = await prisma.users.findFirst({
    where: {
      username: user
    }
  })
  return q;
}

async function insertUser(user: string, email: string, pass: string, date: Date) {
  const q = await prisma.users.create({
    data: {
      username: user,
      email: email,
      password: pass,
      created: date,
    },
  });
  return q;
}
import prisma from "@/db";
import bcrypt from 'bcrypt';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export function createUser(formData: FormData) {
  // const hashedPassword = bcrypt.hash(formdata.get('password'), 10);
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
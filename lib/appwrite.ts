/** @format */

// src/lib/server/appwrite.js
"use server";
import { Client, Account, Databases, Users } from "node-appwrite";
import { cookies } from "next/headers";

export async function createSessionClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

  // const session = await cookies().get("apwrite-session");
  // if (!session || !session.value) {
  //   throw new Error("No session");
  // }

  // client.setSession(session.value);

  try {
    const cookieStore = cookies();
    const session = (await cookieStore).get("appwrite-session");
    if (session?.value) {
      client.setSession(session.value);
    }
  } catch (error) {
    console.error("Error getting session:", error);
  }

  return {
    get account() {
      return new Account(client);
    },
  };
}

export async function createAdminClient() {
  const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!)
    .setKey(process.env.NEXT_APPWRITE_KEY!);

  return {
    get account() {
      return new Account(client);
    },
    get database() {
      return new Databases(client);
    },
    get users() {
      return new Users(client);
    },
  };
}

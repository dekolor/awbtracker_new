"use server";

import { auth } from "@clerk/nextjs/server";

export async function addAwb(awbNumber: string) {
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  // const userAwbs = (await kv.get<string[]>(`awbs:${userId}`)) || [];
  // if (!userAwbs.includes(awbNumber)) {
  //   await kv.set(`awbs:${userId}`, [...userAwbs, awbNumber]);
  // }
}

export async function getAwbs() {
  const { userId } = await auth();
  if (!userId) throw new Error("User not authenticated");

  return (await fetch("http://localhost:3100/awbs/list")).json() || [];
}

"use server";
import { revalidatePath } from "next/cache";

// We are bypassing Prisma for the prototype to ensure the build succeeds
export async function handleRequest(requestId: string, status: 'ACCEPTED' | 'REJECTED') {
  console.log(`Prototype Mode: Request ${requestId} set to ${status}`);
  
  // This simulates a database delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  revalidatePath('/match');
  revalidatePath('/feed');
  
  return { success: true };
}
"use server";
import { prisma } from "@/lib/prisma"; // Adjust this path if your prisma client is elsewhere
import { revalidatePath } from "next/cache";

export async function handleRequest(requestId: string, status: 'ACCEPTED' | 'REJECTED') {
  try {
    await prisma.$transaction(async (tx) => {
      // 1. Update the request status
      const request = await tx.friendRequest.update({
        where: { id: requestId },
        data: { status },
      });

      // 2. If accepted, create the mutual friendship
      if (status === 'ACCEPTED') {
        await tx.user.update({
          where: { id: request.receiverId },
          data: {
            friends: { connect: { id: request.senderId } }
          }
        });
        await tx.user.update({
          where: { id: request.senderId },
          data: {
            friends: { connect: { id: request.receiverId } }
          }
        });
      }
    });

    revalidatePath('/social/hub');
    return { success: true };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false };
  }
}
export async function getFriends(userId: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        friends: true, // This tells Prisma to grab the linked friend records
      },
    });
    return user?.friends || [];
  } catch (error) {
    console.error("Error fetching friends:", error);
    return [];
  }
}
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function GET() {

  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ files: [] });
  }

  const files = await prisma.file.findMany({
    where: {
      ownerId: session.user.id
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return NextResponse.json({ files });

}
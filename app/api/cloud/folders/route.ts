import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {

  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" });
  }

  const body = await req.json();

  const folder = await prisma.folder.create({
    data: {
      name: body.name,
      ownerId: session.user.id,
      parentId: body.parentId || null
    }
  });

  return NextResponse.json(folder);

}
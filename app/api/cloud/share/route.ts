import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const share = await prisma.share.create({
    data: {
      fileId: body.fileId,
      userId: body.userId,
      permission: body.permission || "view"
    }
  });

  return NextResponse.json(share);

}
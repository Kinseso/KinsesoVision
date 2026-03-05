import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

export async function GET() {

  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ used: 0 });
  }

  const files = await prisma.file.findMany({
    where: { ownerId: session.user.id }
  });

  const used = files.reduce((sum,f)=>sum+(f.size || 0),0);

  return NextResponse.json({ used });

}
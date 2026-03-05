import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);

  const q = searchParams.get("q") || "";

  const files = await prisma.file.findMany({
    where:{
      name:{
        contains:q,
        mode:"insensitive"
      }
    }
  });

  return NextResponse.json(files);

}
export const dynamic = "force-dynamic"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const like = await prisma.datingLike.create({
    data: {
      fromId: body.fromId,
      toId: body.toId
    }
  })

  return NextResponse.json(like)
}
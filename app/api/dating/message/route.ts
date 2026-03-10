export const dynamic = "force-dynamic"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const msg = await prisma.datingMessage.create({
    data: {
      fromId: body.fromId,
      toId: body.toId,
      message: body.message
    }
  })

  return NextResponse.json(msg)
}
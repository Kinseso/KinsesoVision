export const dynamic = "force-dynamic"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET() {
  const matches = await prisma.datingLike.findMany({
    include: {
      from: true,
      to: true
    }
  })

  return NextResponse.json(matches)
}
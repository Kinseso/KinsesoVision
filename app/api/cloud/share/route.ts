export const dynamic = "force-dynamic"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"
import crypto from "crypto"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const token = crypto.randomUUID()

    const share = await prisma.share.create({
      data: {
        fileId: body.fileId,
        token: token
      }
    })

    return NextResponse.json({
      share
    })

  } catch (error) {
    console.error("Share creation error:", error)

    return NextResponse.json(
      { error: "Failed to create share" },
      { status: 500 }
    )
  }
}
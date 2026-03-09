import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {

  const body = await req.json()

  const { fileId, motionLevel, brakeForce } = body

  let incident = null

  if (motionLevel > 8 || brakeForce > 7) {
    incident = await prisma.incident.create({
      data: {
        type: "accident",
        description: "Possible collision detected",
        fileId: fileId
      }
    })
  }

  return NextResponse.json({
    incident
  })
}
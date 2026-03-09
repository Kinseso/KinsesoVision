import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { motionLevel, brakeForce } = body

    let incident = null

    if (motionLevel > 8 || brakeForce > 7) {
      incident = await prisma.incident.create({
        data: {
          type: "accident",
          description: "Possible collision detected"
        }
      })
    }

    return NextResponse.json({
      incident
    })

  } catch (error) {
    console.error("AI analyze error:", error)

    return NextResponse.json(
      { error: "Analysis failed" },
      { status: 500 }
    )
  }
}
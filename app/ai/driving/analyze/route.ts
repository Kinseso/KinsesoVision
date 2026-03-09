import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Expect an array of events from the AI driving analysis
    const events = body.events || []

    const createdIncidents = []

    for (const e of events) {
      const incident = await prisma.incident.create({
        data: {
          type: e.type,
          description: e.message
        }
      })

      createdIncidents.push(incident)
    }

    return NextResponse.json({
      incidents: createdIncidents
    })

  } catch (error) {
    console.error("Driving analysis error:", error)

    return NextResponse.json(
      { error: "Driving analysis failed" },
      { status: 500 }
    )
  }
}
export const dynamic = "force-dynamic"

import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const profile = await prisma.datingProfile.create({
      data: {
        userId: body.userId,
        bio: body.bio,
        gender: body.gender,
        lookingFor: body.lookingFor,
        age: body.age,
        city: body.city,
        interests: body.interests
      }
    })

    return NextResponse.json(profile)
  } catch (error) {
    return NextResponse.json({ error: "Profile creation failed" }, { status: 500 })
  }
}
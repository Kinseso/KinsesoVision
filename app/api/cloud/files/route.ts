import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET() {

  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const userId = (session.user as any).id

  const files = await prisma.file.findMany({
    where: {
      ownerId: userId
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return NextResponse.json(files)

}

export async function POST(request: Request) {

  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json(
      { error: "Unauthorized" },
      { status: 401 }
    )
  }

  const body = await request.json()

  const userId = (session.user as any).id

  const file = await prisma.file.create({
    data: {
      name: body.name,
      path: body.path,
      type: body.type,
      size: body.size,
      ownerId: userId
    }
  })

  return NextResponse.json(file)

}
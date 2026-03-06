import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"
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

  const folders = await prisma.folder.findMany({
    where: {
      ownerId: userId
    },
    orderBy: {
      createdAt: "desc"
    }
  })

  return NextResponse.json(folders)
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

  const folder = await prisma.folder.create({
    data: {
      name: body.name,
      ownerId: userId
    }
  })

  return NextResponse.json(folder)
}

import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { prisma } from "@/lib/prisma"

export async function GET() {

  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
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
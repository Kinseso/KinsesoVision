import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: Request){

  const session = await getServerSession(authOptions)

  if(!session || !session.user){
    return NextResponse.json(
      { error:"Unauthorized"},
      { status:401 }
    )
  }

  const userId = (session.user as any).id

  const { searchParams } = new URL(request.url)
  const q = searchParams.get("q") || ""

  const files = await prisma.file.findMany({
    where:{
      ownerId:userId,
      name:{
        contains:q
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return NextResponse.json(files)

}
import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"
import { prisma } from "@/lib/prisma"

export async function GET(){

  const session = await getServerSession(authOptions)

  if(!session || !session.user){
    return NextResponse.json(
      { error:"Unauthorized"},
      { status:401 }
    )
  }

  const userId = (session.user as any).id

  const files = await prisma.file.findMany({
    where:{
      ownerId:userId
    }
  })

  const used = files.reduce((sum,f)=>sum+(f.size || 0),0)

  return NextResponse.json({
    used,
    files
  })

}
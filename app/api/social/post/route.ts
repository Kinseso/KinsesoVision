import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"

export async function POST(request:Request){

  const session = await getServerSession(authOptions)

  if(!session || !session.user){
    return NextResponse.json({error:"Unauthorized"},{status:401})
  }

  const body = await request.json()

  const userId = (session.user as any).id

  const post = await prisma.post.create({
    data:{
      content:body.content,
      videoUrl:body.videoUrl,
      ownerId:userId
    }
  })

  return NextResponse.json(post)

}
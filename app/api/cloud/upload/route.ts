import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/lib/auth"
import { prisma } from "@/lib/prisma"
import path from "path"
import fs from "fs/promises"

export async function POST(request: Request){

  const session = await getServerSession(authOptions)

  if(!session || !session.user){
    return NextResponse.json(
      { error:"Unauthorized"},
      { status:401 }
    )
  }

  const userId = (session.user as any).id

  const formData = await request.formData()
  const file = formData.get("file") as File

  if(!file){
    return NextResponse.json(
      { error:"No file uploaded"},
      { status:400 }
    )
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    userId
  )

  await fs.mkdir(uploadDir, { recursive:true })

  const filePath = path.join(uploadDir, file.name)

  await fs.writeFile(filePath, buffer)

  const savedFile = await prisma.file.create({
    data:{
      name:file.name,
      path:`/uploads/${userId}/${file.name}`,
      size:file.size,
      ownerId:userId
    }
  })

  return NextResponse.json(savedFile)

}
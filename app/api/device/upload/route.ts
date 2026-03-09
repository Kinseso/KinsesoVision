import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import path from "path"
import fs from "fs/promises"

export async function POST(request: Request){

  const formData = await request.formData()

  const deviceId = formData.get("deviceId") as string
  const file = formData.get("file") as File

  if(!deviceId || !file){
    return NextResponse.json(
      { error:"Missing deviceId or file"},
      { status:400 }
    )
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "device_uploads",
    deviceId
  )

  await fs.mkdir(uploadDir,{ recursive:true })

  const filePath = path.join(uploadDir,file.name)

  await fs.writeFile(filePath,buffer)

  const saved = await prisma.file.create({
    data:{
      name:file.name,
      path:`/device_uploads/${deviceId}/${file.name}`,
      size:file.size
    }
  })

  return NextResponse.json(saved)

}

import fs from "fs/promises"
import path from "path"
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req:Request){

const form = await req.formData()

const file = form.get("file") as File
const deviceId = form.get("deviceId") as string

if(!file || !deviceId){
return NextResponse.json({error:"missing data"})
}

const bytes = await file.arrayBuffer()
const buffer = Buffer.from(bytes)

const uploadDir = path.join(process.cwd(),"public","recordings",deviceId)

await fs.mkdir(uploadDir,{recursive:true})

const filePath = path.join(uploadDir,file.name)

await fs.writeFile(filePath,buffer)

const record = await prisma.file.create({

data:{
name:file.name,
path:`/recordings/${deviceId}/${file.name}`
}

})

return NextResponse.json(record)

}
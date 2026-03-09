import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request){

  const body = await request.json()

  if(!body.deviceId){
    return NextResponse.json(
      { error:"Device ID required"},
      { status:400 }
    )
  }

  const device = await prisma.cameraDevice.update({
    where:{
      id:body.deviceId
    },
    data:{
      status:"online",
      lastSeen:new Date()
    }
  })

  return NextResponse.json(device)

}
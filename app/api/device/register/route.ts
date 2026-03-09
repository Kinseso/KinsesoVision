import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: Request){

  const body = await request.json()

  if(!body.name || !body.ownerId){
    return NextResponse.json(
      { error:"Missing device information"},
      { status:400 }
    )
  }

  const device = await prisma.cameraDevice.create({
    data:{
      name:body.name,
      model:body.model || "unknown",
      vehicle:body.vehicle || null,
      ownerId:body.ownerId,
      status:"offline"
    }
  })

  return NextResponse.json(device)

}
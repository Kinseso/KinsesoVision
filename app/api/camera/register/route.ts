import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(req:Request){

const body = await req.json()

const device = await prisma.cameraDevice.create({

data:{
name: body.name,
model: body.model,
vehicle: body.vehicle,
ownerId: body.userId
}

})

return NextResponse.json(device)

}
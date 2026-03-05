import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(){

const devices = await prisma.cameraDevice.findMany()

return NextResponse.json(devices)

}
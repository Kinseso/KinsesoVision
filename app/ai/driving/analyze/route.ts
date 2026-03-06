import { NextResponse } from "next/server"
import { analyzeDrivingData } from "@/lib/ai-driving"
import { prisma } from "@/lib/prisma"

export async function POST(req:Request){

const body = await req.json()

const events = analyzeDrivingData(body)

for(const e of events){

await prisma.incident.create({

data:{
type:e.type,
severity:e.severity,
description:e.message,
fileId: body.fileId
}

})

}

return NextResponse.json({
events
})

}
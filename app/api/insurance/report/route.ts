import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req:Request){

const {searchParams} = new URL(req.url)

const incidentId = searchParams.get("id")

const incident = await prisma.incident.findUnique({
where:{id:incidentId || ""}
})

return NextResponse.json({

report:{
incident,
generatedAt:new Date()
}

})

}
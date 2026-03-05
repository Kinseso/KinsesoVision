import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req:Request){

const {searchParams} = new URL(req.url)

const id = searchParams.get("id")

const files = await prisma.file.findMany({
where:{
path:{
contains:id || ""
}
}
})

return NextResponse.json(files)

}
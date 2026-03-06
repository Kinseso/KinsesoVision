import { NextResponse } from "next/server"

export async function POST(req:Request){

const body = await req.json()

const {filePath} = body

return NextResponse.json({

clip:`${filePath}?clip=incident`

})

}
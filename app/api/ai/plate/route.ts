import { NextResponse } from "next/server"

export async function POST(){

  return NextResponse.json({
    plate:"ABC-1234",
    confidence:0.92
  })

}
import { NextResponse } from "next/server"

export async function POST(request: Request){

  const body = await request.json()

  const { speedDrop, impactForce } = body

  let detected = false

  if(speedDrop > 20 || impactForce > 8){
    detected = true
  }

  return NextResponse.json({
    accidentDetected: detected
  })

}
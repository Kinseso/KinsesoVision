import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message, botType } = await req.json();

    // This is where you would normally call OpenAI or Gemini.
    // For your Visa prototype, we are using a Logic Engine:
    let responseText = "";

    if (botType === "Stylist") {
      responseText = `I've analyzed the current community trends. The "Kinseso Stealth Jacket" is trending. Based on your profile, I recommend the Midnight Black version.`;
    } else if (botType === "Insurance") {
      responseText = `Security Protocol Active. Your H-Cloud storage is at 12% capacity. No unauthorized access attempts detected in the last 24 hours.`;
    } else {
      responseText = `System Status: All KinsesoVision V14 modules are synchronized. Database latency is 24ms.`;
    }

    return NextResponse.json({ text: responseText });
  } catch (error) {
    return NextResponse.json({ text: "System connection error. Please try again." }, { status: 500 });
  }
}
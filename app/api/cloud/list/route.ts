import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  try {
    const uploadsDir = path.join(process.cwd(), "public", "uploads");

    await fs.mkdir(uploadsDir, { recursive: true });

    const files = await fs.readdir(uploadsDir);

    const filtered = files.filter(
      (f) => !f.startsWith(".") && f !== "index.json"
    );

    return NextResponse.json({ files: filtered });
  } catch {
    return NextResponse.json({ files: [] });
  }
}
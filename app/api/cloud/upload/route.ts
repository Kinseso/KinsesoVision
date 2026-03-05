import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {

  const session = await getServerSession();

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" });
  }

  const form = await req.formData();
  const file = form.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = path.join(
    process.cwd(),
    "public",
    "uploads",
    session.user.id
  );

  await fs.mkdir(uploadDir, { recursive: true });

  const filePath = path.join(uploadDir, file.name);

  await fs.writeFile(filePath, buffer);

  const record = await prisma.file.create({
    data: {
      name: file.name,
      path: `/uploads/${session.user.id}/${file.name}`,
      ownerId: session.user.id,
      type: file.type,
      size: file.size
    }
  });

  return NextResponse.json({
    success: true,
    file: record
  });

}
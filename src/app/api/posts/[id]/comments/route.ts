import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { comments } from "@/db/schema";

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb();
    const { id } = await params;
    const body = await req.json();
    const { authorName, content } = body;

    if (!authorName || !content) {
      return NextResponse.json({ error: "Nombre y contenido requeridos" }, { status: 400 });
    }

    const [comment] = await db.insert(comments).values({
      postId: parseInt(id),
      authorName,
      content,
    }).returning();

    return NextResponse.json(comment, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error al crear comentario" }, { status: 500 });
  }
}

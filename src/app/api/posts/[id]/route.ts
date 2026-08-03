import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { posts, comments } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb();
    const { id } = await params;
    const [post] = await db.select().from(posts).where(eq(posts.id, parseInt(id)));

    if (!post) {
      return NextResponse.json({ error: "Post no encontrado" }, { status: 404 });
    }

    const postComments = await db
      .select()
      .from(comments)
      .where(eq(comments.postId, parseInt(id)))
      .orderBy(comments.createdAt);

    return NextResponse.json({ ...post, comments: postComments });
  } catch {
    return NextResponse.json({ error: "Error al cargar post" }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb();
    const { id } = await params;
    const password = req.headers.get("x-admin-password");

    if (password !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    await db.delete(posts).where(eq(posts.id, parseInt(id)));
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Error al eliminar post" }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/db";
import { posts } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { neon } from "@neondatabase/serverless";

const createTables = async () => {
  const sql = neon(process.env.DATABASE_URL!);
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      author_name TEXT NOT NULL,
      author_email TEXT NOT NULL,
      category TEXT NOT NULL,
      title TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    );
    CREATE TABLE IF NOT EXISTS comments (
      id SERIAL PRIMARY KEY,
      post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE NOT NULL,
      author_name TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT NOW() NOT NULL
    );
  `;
};

export async function GET(req: NextRequest) {
  try {
    await createTables();
    const db = getDb();
    const { searchParams } = new URL(req.url);
    const category = searchParams.get("category");

    const result = category
      ? await db.select().from(posts).where(eq(posts.category, category)).orderBy(desc(posts.createdAt))
      : await db.select().from(posts).orderBy(desc(posts.createdAt));

    return NextResponse.json(result);
  } catch {
    return NextResponse.json({ error: "Error al cargar posts" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await createTables();
    const db = getDb();
    const body = await req.json();
    const { authorName, authorEmail, category, title, content } = body;

    if (!authorName || !authorEmail || !category || !title || !content) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const [post] = await db.insert(posts).values({
      authorName,
      authorEmail,
      category,
      title,
      content,
    }).returning();

    return NextResponse.json(post, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Error al crear post" }, { status: 500 });
  }
}

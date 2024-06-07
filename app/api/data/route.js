import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { userId, data } = await request.json();

  try {
    await sql`INSERT INTO UserData (userId, data) VALUES (${userId}, ${data});`;
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
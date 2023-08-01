import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic'

export async function GET() {
  const allProduct = await db.select().from(products);
  return NextResponse.json(allProduct);
}

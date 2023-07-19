import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  const oneProduct = await db
    .select()
    .from(products)
    .where(eq(products.id, productId as unknown as number));

  return NextResponse.json(oneProduct);
}

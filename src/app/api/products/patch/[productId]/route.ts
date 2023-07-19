import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function PATCH(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;
  const payload = await request.json();
  const updatedData = await db
    .update(products)
    .set(payload)
    .where(eq(products.id, productId as unknown as number));

  return NextResponse.json(updatedData, { status: 200 });
}

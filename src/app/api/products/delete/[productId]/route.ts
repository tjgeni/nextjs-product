import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: { productId: string } }
) {
  const productId = params.productId;

  try {
    await db
      .delete(products)
      .where(eq(products.id, productId as unknown as number));
    return new NextResponse(null, {
      status: 204,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("anomaly", { status: 500 });
  }
}

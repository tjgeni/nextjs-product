
import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getOneProduct(productId: string) {
  const oneProduct = await db
    .select()
    .from(products)
    .where(eq(products.id, productId as unknown as number));

    return oneProduct;
}
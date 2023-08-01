"use server"
import { Products } from "../../schema";
import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

// TODO: All these DB editing functions do not have zod validation yet. Should be added.
export async function updateProduct(productId: string, data: Products) {
  const updatedData = await db
    .update(products)
    .set(data)
    .where(eq(products.id, productId as unknown as number));

  revalidatePath("/products");
  return updatedData
}

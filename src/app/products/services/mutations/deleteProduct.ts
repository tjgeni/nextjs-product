"use server"
import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// TODO: All these DB editing functions do not have zod validation yet. Should be added.
export async function deleteProduct(productId: string) {
  await db
      .delete(products)
      .where(eq(products.id, productId as unknown as number));
  revalidatePath('/products')
  redirect('/products')
}

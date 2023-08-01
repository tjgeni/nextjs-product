import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";

export async function getAllProducts() {
  const allProduct = await db.select().from(products);
  return allProduct
}

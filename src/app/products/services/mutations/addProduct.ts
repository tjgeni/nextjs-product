"use server"
import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { revalidatePath } from "next/cache";

// TODO: All these DB editing functions do not have zod validation yet. Should be added.
export async function insertProduct(data: any /* TODO: Fix the type, it's incorrect */) {
    const product = await db.insert(products).values(data).returning();

    revalidatePath("/products");
    return product
}

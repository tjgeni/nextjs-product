"use server"
import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// TODO: All these DB editing functions do not have zod validation yet. Should be added.
export async function insertProduct(data: any /* TODO: Fix the type, it's incorrect */) {
    await db.insert(products).values(data).returning();

    revalidatePath("/products");
    redirect('/products')
}

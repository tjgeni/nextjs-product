import { db } from "@/db/drizzle-client";
import { products } from "@/db/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const product = await db.insert(products).values(json);

    return new NextResponse(JSON.stringify(product), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new NextResponse("anomaly", { status: 500 });
  }
}

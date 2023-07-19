import { Products } from "@/app/products/schema";

export async function deleteProduct(productId: string) {
  try {
    const response = await fetch(`/api/products/delete/${productId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    return response;
  } catch (error) {
    console.error(error);
  }
}

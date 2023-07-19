import { Products } from "../schema";

export async function updateProduct(productId: string, data: Products) {
  try {
    const response = await fetch(`/api/products/patch/${productId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    return response;
  } catch (error) {}
}

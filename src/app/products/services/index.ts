import { getBaseUrl } from "@/lib/getBaseURL";

export async function getAllProduct() {
  const response = await fetch(`${getBaseUrl()}/api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch all products");
  }

  return response.json();
}

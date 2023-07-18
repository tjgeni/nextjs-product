export async function getAllProduct() {
  const response = await fetch("http://localhost:3000/api/products");
  if (!response.ok) {
    throw new Error("Failed to fetch all products");
  }

  return response.json();
}

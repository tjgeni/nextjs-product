export async function getAllProduct() {
  const response = await fetch(`${process.env.URL_STRING}api/products`);
  if (!response.ok) {
    throw new Error("Failed to fetch all products");
  }

  return response.json();
}

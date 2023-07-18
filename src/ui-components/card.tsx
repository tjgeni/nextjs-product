import { Products } from "@/app/products/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardUI({
  id,
  product_name,
  category,
  product_spec,
  price,
}: Products) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2>
          <b>Category: {category}</b>
        </h2>
        <p>Product Spesifikasi: {product_spec}</p>
        <p>Harga: {price}</p>
      </CardContent>
    </Card>
  );
}

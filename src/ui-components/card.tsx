import { Products } from "@/app/products/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CardUI({ product_name, category }: Products) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-slate-500">Category: {category}</h2>
      </CardContent>
    </Card>
  );
}

"use client";

import { Products } from "@/app/products/schema";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function CardUI({ id, product_name, category }: Products) {
  const router = useRouter();

  function handleRoute(id: number | undefined) {
    router.push(`/products/${id}`);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{product_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <h2 className="text-slate-500">Category: {category}</h2>
        <div className="flex justify-center mt-3">
          <Button variant="ghost" onClick={() => handleRoute(id)}>
            Edit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

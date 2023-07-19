"use client";

import Link from "next/link";
import CardUI from "@/ui-components/card";
import { Button } from "@/components/ui/button";
import { Products } from "./schema";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";

// export const dynamic = "force-dynamic";

export default function Products() {
  // const allProducts: Products[] = await getAllProduct();
  const { data, isLoading } = useSWR("/api/products/get-all", fetcher, {
    refreshInterval: 1000,
  });

  if (isLoading) return <div>loading...</div>;

  return (
    <div>
      <div className="flex justify-end">
        <Link href={"/"}>
          <p className="p-5 underline ">👈 Back to Homepage</p>
        </Link>
      </div>

      <div className="max-w-screen-lg m-auto">
        <div className="mx-10 my-6">
          <Button asChild>
            <Link href={"/products/add"}>Add Product</Link>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {data?.map((item: Products) => (
            <Link href={`/products/${item.id}`} key={item.id}>
              <CardUI
                product_name={item.product_name}
                category={item.category}
                product_spec={item.product_spec}
                price={item.price}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

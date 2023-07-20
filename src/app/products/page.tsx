// "use client";

import Link from "next/link";
import CardUI from "@/ui-components/card";
import { Button } from "@/components/ui/button";
import { Products } from "./schema";
import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { getAllProduct } from "./services/getAllProduct";

export const fetchCache = "force-no-store";
export const revalidate = 0; // seconds
export const dynamic = "force-dynamic";

export default async function Products() {
  const data: Products[] = await getAllProduct();
  /*   const { data, isLoading } = useSWR("/api/products/get-all", fetcher, {
    refreshInterval: 1000,
  });
  

  console.log(data);

  if (isLoading) return <div>loading...</div>; */

  const totalProduct = data.length;

  return (
    <div>
      <div className="flex justify-end">
        <Link href={"/"} prefetch={false}>
          <p className="p-5 underline ">👈 Back to Homepage</p>
        </Link>
      </div>

      <div className="max-w-screen-lg m-auto">
        <div className="mx-6 my-6 flex justify-between">
          <Button asChild>
            <Link href={"/products/add"} prefetch={false}>
              Add Product
            </Link>
          </Button>
          <div>
            <p>
              Total Product: <span className="text-xl">{totalProduct}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {data?.map((item: Products) => (
            <Link href={`/products/${item.id}`} key={item.id} prefetch={false}>
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

import Link from "next/link";
import CardUI from "@/ui-components/card";
import { Button } from "@/components/ui/button";
import { Products } from "./schema";
import { getAllProducts } from "./services/getAllProducts";

export const dynamic = "force-dynamic";

export default async function Products() {
  const data = await getAllProducts();
  const totalProduct = data.length;

  return (
    <div>
      <div className="flex">
        <Link href={"/"} prefetch={false}>
          <h2 className="p-5 hover:underline">_/ Dashboard</h2>
        </Link>
      </div>

      <div className="max-w-4xl m-auto">
        <div className="flex justify-between mx-6 my-6">
          <div>
            <p>
              Total Product:{" "}
              <span className="text-xl font-bold">{totalProduct}</span>
            </p>
          </div>
          <Button asChild>
            <Link href={"/products/add"} prefetch={false}>
              Add Product
            </Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {data.map((item) => (
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

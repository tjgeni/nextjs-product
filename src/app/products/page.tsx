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
      <div className="flex justify-end">
        <Link href={"/"} prefetch={false}>
          <p className="p-5 underline ">👈 Back to Homepage</p>
        </Link>
      </div>

      <div className="max-w-screen-lg m-auto">
        <div className="flex justify-between mx-6 my-6">
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

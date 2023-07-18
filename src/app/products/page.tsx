import Link from "next/link";
import CardUI from "@/ui-components/card";
import { Button } from "@/components/ui/button";
import { Products } from "./schema";
import { getAllProduct } from "./services";

export default async function Products() {
  // const allProducts: Products[] = await getAllProduct();

  return (
    <div>
      <Link href={"/"}>
        <p className="p-5 underline">👈 Back to Homepage</p>
      </Link>

      {/*  <div className="max-w-screen-lg m-auto">
        <div className="m-4">
          <Button asChild>
            <Link href={"/products/add"}>Add Product</Link>
          </Button>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {allProducts.map((item) => (
            <CardUI
              key={item.id}
              product_name={item.product_name}
              category={item.category}
              product_spec={item.product_spec}
              price={item.price}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
}

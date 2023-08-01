import { getOneProduct } from "../services/getOneProduct";
import { FormUpdate } from "./product-form";

export default async function ProductPage({params}: {params: {productId: string}}) {
  const data = await getOneProduct(params.productId)

  return (
    <FormUpdate data={data} productId={params.productId} />
  );
}

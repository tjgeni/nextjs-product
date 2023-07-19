"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { insertProduct } from "@/app/products/services/addProduct";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";

const formSchema = z.object({
  category: z.string().min(2, {
    message: "Category minimal 2 Character",
  }),
  product_name: z.string().min(10, {
    message: "Product name minimal 10 Character",
  }),
  product_spec: z.string().min(10, {
    message: "Product spesifikasi minimal 10 Character",
  }),
  price: z.string().min(2, {
    message: "Harga minimal 2 Character",
  }),
});

export default function FormUI() {
  const route = useRouter();
  const pathName = usePathname();
  const productId = pathName.substring(10);

  const { data, isLoading } = useSWR(
    `/api/products/get-one/${productId}`,
    fetcher
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    const response = await insertProduct(formValues);
    if (response?.ok) {
      route.push("/products");
      route.refresh();
    }
  }

  if (productId !== "add") if (isLoading) return <div>loading...</div>;

  return (
    <div className="max-w-screen-sm m-auto">
      <h2 className="text-2xl my-4">
        <b>Update Product</b>
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            defaultValue={productId ? data?.[0].category : ""}
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="misalkan category" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product_name"
            defaultValue={productId ? data?.[0].category : ""}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input placeholder="misalkan product name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="product_spec"
            defaultValue={productId ? data?.[0].category : ""}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product Spec</FormLabel>
                <FormControl>
                  <Input placeholder="misalkan product spec" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            defaultValue={productId ? data?.[0].category : ""}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="misalkan price" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex gap-4 justify-end">
            <Button type="submit">Submit</Button>
            <Button asChild>
              <Link href={"/products"}>Cancel</Link>
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

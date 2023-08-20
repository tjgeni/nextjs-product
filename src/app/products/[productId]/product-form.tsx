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
import { useRouter } from "next/navigation";
import { Products } from "../schema";
import { updateProduct } from "../services/mutations/updateProduct";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useTransition } from "react";
import { deleteProduct } from "../services/mutations/deleteProduct";
import type { getOneProduct } from "../services/getOneProduct";

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

export function FormUpdate({
  productId,
  data,
}: {
  productId: string;
  data: Awaited<ReturnType<typeof getOneProduct>>;
}) {
  const [_isPending, startTransition] = useTransition();
  const route = useRouter();
  const { toast } = useToast();
  const [openDialog, setOpenDialog] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(formValues: z.infer<typeof formSchema>) {
    startTransition(async () => {
      await updateProduct(productId, formValues);
      toast({
        title: "Info",
        description: "Product Berhasil diupdate!",
      });
    });
  }

  async function handleDelete() {
    startTransition(async () => {
      await deleteProduct(productId);
      setOpenDialog(false);
      toast({
        title: "Info",
        description: "Product Berhasil dihapus!",
      });
    });
  }

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="max-w-lg w-full shadow-xl p-10 rounded-xl">
        <div className="flex justify-between">
          <h2 className="my-4 text-2xl">
            <b>Update Product</b>
          </h2>
          <div className="pt-4">
            <Dialog open={openDialog}>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="text-red-600"
                  onClick={() => setOpenDialog(true)}
                >
                  Delete
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Are you sure?</DialogTitle>
                  <DialogDescription>
                    {data?.[0]?.product_name} will be deleted.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <div className="flex gap-4">
                    <Button type="submit" onClick={handleDelete}>
                      Yay
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setOpenDialog(false)}
                    >
                      Nah
                    </Button>
                  </div>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <Form {...form}>
          {data?.map((item: Products) => (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              key={item.id}
            >
              <FormField
                defaultValue={productId ? item.category : ""}
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Books" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product_name"
                defaultValue={productId ? item.product_name : ""}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Harry Potter" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="product_spec"
                defaultValue={productId ? item.product_spec : ""}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Spec</FormLabel>
                    <FormControl>
                      <Input placeholder="500hl" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                defaultValue={productId ? item.price : ""}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="235.0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end gap-4">
                <Button type="submit">Submit</Button>
                <Button asChild variant="outline">
                  <Link href={"/products"} prefetch={false}>
                    Cancel
                  </Link>
                </Button>
              </div>
            </form>
          ))}
        </Form>
      </div>
    </div>
  );
}

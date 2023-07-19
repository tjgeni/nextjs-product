"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import useSWR from "swr";
import { fetcher } from "@/lib/fetcher";
import { Products } from "../schema";
import { getBaseUrl } from "@/lib/getBaseURL";

export default function ProductDetail({
  params,
}: {
  params: { productId: string };
}) {
  const { data, isLoading } = useSWR(
    `/api/products/get-one/${params.productId}`,
    fetcher
  );
  if (isLoading) return <div>loading...</div>;
  const item = Object.assign({}, ...data);

  return (
    <div className="max-w-screen-sm m-auto">
      <div className="text-2xl font-bold my-5">
        <h2>Product Detail</h2>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>{item.product_name}</CardTitle>
          <CardDescription className="text-md">
            {item?.product_spec}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-xl">Price: {item?.price}</p>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button asChild variant="secondary">
            <Link href={"/products"}>Cancel</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={"/products"}>Update</Link>
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Hapus Product {item?.product_name}?</DialogTitle>
                <DialogDescription>
                  Product akan segera dihapus.
                </DialogDescription>
              </DialogHeader>

              <DialogFooter>
                <Button type="submit">Ya</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
}

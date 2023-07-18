import FormUI from "@/ui-components/form";
import Link from "next/link";

export default function Add() {
  return (
    <>
      <Link href={"/products"}>
        <p className="p-5 underline">👈 Back to List of Product</p>
      </Link>
      <div className="max-w-screen-sm m-auto">
        <FormUI />
      </div>
    </>
  );
}

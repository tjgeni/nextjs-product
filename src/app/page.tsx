import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex justify-center items-center min-h-screen">
        <Link href={"/products"} prefetch={false}>
          <h1 className="font-semibold">See your Products</h1>
        </Link>
      </div>
    </main>
  );
}

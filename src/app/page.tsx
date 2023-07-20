import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <Card>
          <CardHeader>
            <Link href={"/products"} prefetch={false}>
              <CardTitle>Cek Produk</CardTitle>
            </Link>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}

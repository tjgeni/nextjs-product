import { pgTable, serial, text, timestamp, numeric } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at"),
  updated_at: timestamp("updated_at"),
  category: text("category"),
  product_name: text("product_name"),
  product_spec: text("product_spec"),
  price: numeric("price"),
});

import { pgTable, serial, text, timestamp, numeric } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  created_at: timestamp("created_at").notNull(),
  updated_at: timestamp("updated_at").notNull(),
  category: text("category").notNull(),
  product_name: text("product_name").notNull(),
  product_spec: text("product_spec").notNull(),
  price: numeric("price").notNull(),
});

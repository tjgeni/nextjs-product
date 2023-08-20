import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

export default {
  schema: "./src/db/schema.ts",
  out: "./src/db/migration",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.CONNECTION_STRING!,
  },
} satisfies Config;

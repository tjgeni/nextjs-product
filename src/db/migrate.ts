import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

const pool = new Pool({
  connectionString: process.env.CONNECTION_STRING,
});

const db = drizzle(pool);

async function migrateDB() {
  console.log("migration started...");
  await migrate(db, { migrationsFolder: "src/db/migration" });
  console.log("migration ended...");
  process.exit(0);
}

migrateDB().catch((err) => {
  console.log(err);
  process.exit(0);
});

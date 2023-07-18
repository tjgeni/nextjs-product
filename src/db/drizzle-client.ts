import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = process.env.CONNECTION_STRING;
const client = postgres(connectionString!);
export const db = drizzle(client);

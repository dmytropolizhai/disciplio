import type { Config } from "drizzle-kit";

export default {
  schema: "./src/database/schema.ts",
  out: "./src/database/drizzle",
  dialect: "sqlite",
  driver: "expo",
} satisfies Config
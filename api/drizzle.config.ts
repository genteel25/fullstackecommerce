import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: ["./src/db/productSchema.ts"],
  dialect: "postgresql",
  dbCredentials: {
    url:
      process.env.DATABASE_URL ??
      "postgresql://admin:jhcr2wt3mzup@ep-proud-hall-a4mzks8c-pooler.us-east-1.aws.neon.tech/ecommerce?sslmode=require",
  },
  verbose: true,
  strict: true,
});

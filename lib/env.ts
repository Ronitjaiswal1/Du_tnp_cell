import "server-only";

import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string().min(1).optional(),
  MONGODB_DB_NAME: z.string().min(1).default("tnp_website"),
  SAMARTH_REDIRECT_URL: z.string().url().default("https://slc.uod.ac.in/"),
  BROCHURE_PUBLIC_PATH: z.string().min(1).default("/Placement_Fot_2026.pdf"),
  LEADS_RATE_LIMIT_WINDOW_MS: z.coerce.number().int().positive().default(60_000),
  LEADS_RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(15),
});

const parsed = envSchema.parse({
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DB_NAME: process.env.MONGODB_DB_NAME,
  SAMARTH_REDIRECT_URL: process.env.SAMARTH_REDIRECT_URL,
  BROCHURE_PUBLIC_PATH: process.env.BROCHURE_PUBLIC_PATH,
  LEADS_RATE_LIMIT_WINDOW_MS: process.env.LEADS_RATE_LIMIT_WINDOW_MS,
  LEADS_RATE_LIMIT_MAX_REQUESTS: process.env.LEADS_RATE_LIMIT_MAX_REQUESTS,
});

export const env = parsed;

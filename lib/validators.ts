import { z } from "zod";

export const leadIntentSchema = z.enum([
  "register_to_hire",
  "download_brochure",
  "event_registration",
  "proposal_submission",
]);

export const recruiterLeadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  company: z.string().trim().min(2).max(160),
  workEmail: z.string().trim().email().max(160),
  intent: leadIntentSchema,
  source: z.string().trim().min(2).max(120),
  website: z.string().trim().max(0).optional(),
});

export const eventItemSchema = z.object({
  title: z.string().trim().min(2).max(180),
  date: z.string().trim().min(2).max(80),
  details: z.string().trim().min(2).max(240),
  tag: z.string().trim().min(2).max(80),
  cta: z.string().trim().min(2).max(80),
});

export const countersSchema = z.object({
  placementRate: z.string().trim().min(2).max(32),
  highestPackage: z.string().trim().min(2).max(32),
  averagePackage: z.string().trim().min(2).max(32),
  companiesVisited: z.string().trim().min(2).max(32),
});

export type RecruiterLeadInput = z.infer<typeof recruiterLeadSchema>;

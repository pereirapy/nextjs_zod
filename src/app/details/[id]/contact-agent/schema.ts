import { z } from "zod";


export const contactAgentSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phoneNumber: z.coerce.number().int().gte(10000),
  comments: z.string().min(10),
});

export type ContactAgentSchema = z.infer<typeof contactAgentSchema>;
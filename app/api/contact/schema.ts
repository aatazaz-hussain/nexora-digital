import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().email("Please enter a valid email address").max(120),
  phone: z.string().min(6, "Please enter a valid phone number").max(30),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export type ContactPayload = z.infer<typeof contactSchema>;
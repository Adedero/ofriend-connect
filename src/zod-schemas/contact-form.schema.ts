import * as z from "zod/v4";

export const contactFormSchema = z.object({
  fullName: z
    .string("Enter your full name")
    .min(3, "Full name is too short")
    .max(40, "Full name is too long"),
  email: z.email("Invalid email address"),
  product: z.string("Enter the product name").min(2, "Enter the product name"),
  message: z
    .string("Enter your message")
    .min(3, "Message is too short")
    .max(2_000, "Message is too long"),
});

export type ContactFormType = z.infer<typeof contactFormSchema>;

export const contactFormDefaultValues: ContactFormType = {
  fullName: "",
  email: "",
  product: "",
  message: "",
};

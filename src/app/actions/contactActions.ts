"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters.").max(500, "Message must be at most 500 characters."),
});

type ContactFormValues = z.infer<typeof formSchema>;

export async function submitContactForm(data: ContactFormValues): Promise<{ success: boolean; message: string }> {
  console.log("Contact form submitted:", data);
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  // For demonstration, always return success.
  // In a real app, you would handle email sending or database saving here.
  // And potentially return errors.
  return { success: true, message: "Your message has been sent successfully!" };
}

"use server";

import { rewriteContentTone, type RewriteContentToneInput, type RewriteContentToneOutput } from "@/ai/flows/rewrite-content-tone";

export async function handleRewriteContent(input: RewriteContentToneInput): Promise<RewriteContentToneOutput | { error: string }> {
  try {
    const result = await rewriteContentTone(input);
    return result;
  } catch (error) {
    console.error("Error in handleRewriteContent:", error);
    return { error: "Failed to rewrite content. Please try again." };
  }
}

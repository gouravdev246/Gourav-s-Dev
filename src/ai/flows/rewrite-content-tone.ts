'use server';

/**
 * @fileOverview AI-powered content rewriting flow for adjusting tone.
 *
 * - rewriteContentTone - A function that rewrites content based on the desired tone.
 * - RewriteContentToneInput - The input type for the rewriteContentTone function.
 * - RewriteContentToneOutput - The return type for the rewriteContentTone function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RewriteContentToneInputSchema = z.object({
  content: z.string().describe('The content to be rewritten.'),
  tone: z
    .enum(['professional', 'casual'])
    .describe('The desired tone for the rewritten content.'),
  targetAudience: z
    .string()
    .optional()
    .describe('The intended audience for the rewritten content.'),
});

export type RewriteContentToneInput = z.infer<typeof RewriteContentToneInputSchema>;

const RewriteContentToneOutputSchema = z.object({
  rewrittenContent: z.string().describe('The rewritten content with the adjusted tone.'),
});

export type RewriteContentToneOutput = z.infer<typeof RewriteContentToneOutputSchema>;

export async function rewriteContentTone(input: RewriteContentToneInput): Promise<RewriteContentToneOutput> {
  return rewriteContentToneFlow(input);
}

const rewriteContentTonePrompt = ai.definePrompt({
  name: 'rewriteContentTonePrompt',
  input: {schema: RewriteContentToneInputSchema},
  output: {schema: RewriteContentToneOutputSchema},
  prompt: `Rewrite the following content to be more {{{tone}}}.

  Content: {{{content}}}

  {% if targetAudience %}
  Also, tailor the content to the following target audience: {{{targetAudience}}}.
  {% endif %}
  `,
});

const rewriteContentToneFlow = ai.defineFlow(
  {
    name: 'rewriteContentToneFlow',
    inputSchema: RewriteContentToneInputSchema,
    outputSchema: RewriteContentToneOutputSchema,
  },
  async input => {
    const {output} = await rewriteContentTonePrompt(input);
    return output!;
  }
);

import { ToneAIForm } from '@/components/tone-ai/ToneAIForm';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tone AI Tool | Gourav's Digital Canvas",
  description: "Use AI to rewrite your content, adjusting its tone for different audiences.",
};

export default function ToneAIPage() {
  return (
    <SectionWrapper>
      <SectionHeader
        title="AI-Powered Content Tuner"
        subtitle="Refine your writing effortlessly. Select a tone, optionally specify your audience, and let AI enhance your message."
      />
      <ToneAIForm />
    </SectionWrapper>
  );
}

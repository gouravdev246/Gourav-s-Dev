import { AboutContent } from '@/components/about/AboutContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Me | Gourav's Digital Canvas",
  description: "Learn more about Gourav, his skills, and experience.",
};

export default function AboutPage() {
  return <AboutContent />;
}

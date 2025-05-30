
import { AboutContent } from '@/components/about/AboutContent';
import type { Metadata } from 'next';
import { APP_NAME } from '@/constants/site';

export const metadata: Metadata = {
  title: `About Me | ${APP_NAME}`,
  description: "Learn more about Gourav, his skills, and experience.",
};

export default function AboutPage() {
  return <AboutContent />;
}

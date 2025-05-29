
import { ContactContent } from '@/components/contact/ContactContent';
import type { Metadata } from 'next';
import { APP_NAME } from '@/constants/site';

export const metadata: Metadata = {
  title: `Contact Me | ${APP_NAME}`,
  description: "Get in touch with Gourav for projects, collaborations, or inquiries.",
};

export default function ContactPage() {
  return <ContactContent />;
}

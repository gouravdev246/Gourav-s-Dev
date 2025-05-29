import { ContactContent } from '@/components/contact/ContactContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Me | Gourav's Digital Canvas",
  description: "Get in touch with Gourav for projects, collaborations, or inquiries.",
};

export default function ContactPage() {
  return <ContactContent />;
}

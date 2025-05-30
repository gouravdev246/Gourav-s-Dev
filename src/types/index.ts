import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  match?: (pathname: string) => boolean;
};

export type ProjectImage = {
  url: string;
  hint?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string; // Short description for cards
  longDescription: string | React.ReactNode; // Detailed description for project page
  imageUrl: string;
  imageHint?: string; // For data-ai-hint
  tags: string[];
  liveDemoUrl?: string;
  codeRepoUrl?: string;
  images?: ProjectImage[]; // Additional images for project page
  year?: number;
  role?: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: LucideIcon;
};

export type ExperienceEntry = {
  company: string;
  role: string;
  startDate: string;
  endDate: string; // Can be "Present"
  description: string | React.ReactNode;
  technologies: string[];
  logoUrl?: string; // Optional company logo
  logoHint?: string;
};

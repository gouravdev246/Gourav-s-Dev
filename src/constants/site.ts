
import type { NavItem, SocialLink } from '@/types';
import { Home, LayoutGrid, User, Mail, Wand2, Github, Linkedin, FileText, Instagram } from 'lucide-react';

export const APP_NAME = "Gourav's Dev";

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/projects', label: 'Projects', icon: LayoutGrid },
  { href: '/about', label: 'About', icon: User },
  { href: '/tone-ai', label: 'Tone AI', icon: Wand2 },
  { href: '/contact', label: 'Contact', icon: Mail },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/gouravdev246',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/gouravdev/',
    icon: Linkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ff_gourav_yt/',
    icon: Instagram,
  },
];

export const SITE_AUTHOR = "Gourav";
export const SITE_DESCRIPTION = "Explore the creative works and professional journey of Gourav, a passionate developer and innovator.";

// Skills data
export const SKILLS_CATEGORIES = [
  {
    name: "Technical Skills",
    skills: [
      "HTML",
      "CSS",
      "Python",
      "Bootstrap",
      "Numpy",
      "Git",
      "Firebase Studio",
      "Cursor",
      "ChatGPT",
      "Other AI Tools"
    ],
  }
];


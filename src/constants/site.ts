
import type { NavItem, SocialLink } from '@/types';
import { Home, LayoutGrid, User, Mail, Wand2, Github, Linkedin, FileText } from 'lucide-react';

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
    url: 'https://github.com/yourusername', // Replace with actual username
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername', // Replace with actual username
    icon: Linkedin,
  },
  // Add more social links if needed
];

export const SITE_AUTHOR = "Gourav";
export const SITE_DESCRIPTION = "Explore the creative works and professional journey of Gourav, a passionate developer and innovator.";

// Skills data
export const SKILLS_CATEGORIES = [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Python", "Firebase"],
  },
  {
    name: "AI/ML",
    skills: ["Genkit", "LangChain", "TensorFlow", "PyTorch"],
  },
  {
    name: "Tools & Others",
    skills: ["Git", "Docker", "CI/CD", "Agile Methodologies"],
  }
];

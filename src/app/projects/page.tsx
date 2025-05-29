import { ProjectList } from '@/components/projects/ProjectList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Projects | Gourav's Digital Canvas",
  description: "Explore a collection of projects by Gourav.",
};

export default function ProjectsPage() {
  return <ProjectList />;
}

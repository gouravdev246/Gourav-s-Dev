
import { ProjectList } from '@/components/projects/ProjectList';
import type { Metadata } from 'next';
import { APP_NAME } from '@/constants/site';

export const metadata: Metadata = {
  title: `Projects | ${APP_NAME}`,
  description: "Explore a collection of projects by Gourav.",
};

export default function ProjectsPage() {
  return <ProjectList />;
}

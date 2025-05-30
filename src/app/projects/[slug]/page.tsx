
import { getProjectBySlug, getAllProjects } from '@/data/projects.tsx';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { notFound } from 'next/navigation';
import type { Metadata, ResolvingMetadata } from 'next';
import { APP_NAME } from '@/constants/site';

type Props = {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: `Project Not Found | ${APP_NAME}`,
    };
  }

  return {
    title: `${project.title} | ${APP_NAME}`,
    description: project.description,
    openGraph: {
      title: `${project.title} | ${APP_NAME}`,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          width: 1200, // Adjust as needed
          height: 630, // Adjust as needed
          alt: project.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map(project => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

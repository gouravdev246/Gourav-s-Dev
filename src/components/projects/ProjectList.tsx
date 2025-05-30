import { getAllProjects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';

export function ProjectList() {
  const projects = getAllProjects();

  return (
    <SectionWrapper>
      <SectionHeader
        title="My Projects"
        subtitle="Explore a collection of my work, showcasing various technologies and problem-solving approaches."
      />
      {projects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No projects to display at the moment.</p>
      )}
    </SectionWrapper>
  );
}

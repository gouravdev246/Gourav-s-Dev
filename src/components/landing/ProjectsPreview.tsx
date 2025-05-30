
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getFeaturedProjects } from '@/data/projects.tsx';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ProjectsPreview() {
  const featuredProjects = getFeaturedProjects(3); // Show 3 featured projects

  return (
    <SectionWrapper>
      <SectionHeader
        title="Featured Projects"
        subtitle="A glimpse into some of my recent and impactful work."
        className="animate-in fade-in slide-in-from-top-8 duration-500"
      />
      {featuredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No featured projects to display at the moment.</p>
      )}
      <div className={cn(
          "mt-12 text-center",
          "animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200"
        )}>
        <Button asChild size="lg" variant="default">
          <Link href="/projects">
            Explore All Projects <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}

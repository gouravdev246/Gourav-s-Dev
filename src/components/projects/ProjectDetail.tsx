import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Code, Calendar, UserCircle } from 'lucide-react';
import { SectionWrapper } from '../ui/section-wrapper';

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <SectionWrapper>
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary mb-4">{project.title}</h1>
          <p className="text-xl text-muted-foreground">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </header>

        <Card className="mb-8 shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-video relative w-full overflow-hidden rounded-t-lg">
              <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
                priority
                data-ai-hint={project.imageHint || 'project main image'}
              />
            </div>
          </CardContent>
        </Card>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
            {project.year && (
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2 text-primary" />
                Year: {project.year}
              </div>
            )}
            {project.role && (
              <div className="flex items-center text-sm text-muted-foreground md:col-span-2">
                <UserCircle className="h-4 w-4 mr-2 text-primary" />
                Role: {project.role}
              </div>
            )}
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 text-foreground">
          {typeof project.longDescription === 'string' ? <p>{project.longDescription}</p> : project.longDescription}
        </div>

        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.images.map((img, index) => (
                <Card key={index} className="overflow-hidden shadow-md">
                  <div className="aspect-video relative w-full">
                    <Image
                      src={img.url}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      data-ai-hint={img.hint || 'project screenshot'}
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-wrap gap-4 mt-8">
          {project.liveDemoUrl && (
            <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
              <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </Link>
            </Button>
          )}
          {project.codeRepoUrl && (
            <Button asChild variant="outline" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href={project.codeRepoUrl} target="_blank" rel="noopener noreferrer">
                <Code className="mr-2 h-4 w-4" /> View Code
              </Link>
            </Button>
          )}
        </div>
      </article>
    </SectionWrapper>
  );
}

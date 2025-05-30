import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getAllExperienceEntries } from '@/data/experience';
import type { ExperienceEntry } from '@/types';
import { Briefcase, CalendarDays } from 'lucide-react';
import Image from 'next/image';

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg flex flex-col">
      <CardHeader>
        {entry.logoUrl && (
          <div className="mb-3 h-10 flex items-start">
            <Image 
              src={entry.logoUrl} 
              alt={`${entry.company} logo`} 
              width={100} 
              height={40} 
              className="object-contain rounded"
              data-ai-hint={entry.logoHint || 'company logo'}
            />
          </div>
        )}
        <CardTitle className="text-xl font-semibold text-primary">{entry.role}</CardTitle>
        <CardDescription className="text-md text-foreground">{entry.company}</CardDescription>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
          <CalendarDays className="h-3 w-3 mr-1.5" />
          {entry.startDate} – {entry.endDate}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-sm text-muted-foreground prose prose-sm dark:prose-invert max-w-none">
          {typeof entry.description === 'string' ? <p>{entry.description}</p> : entry.description}
        </div>
      </CardContent>
      {entry.technologies.length > 0 && (
        <CardFooter>
          <div className="flex flex-wrap gap-2">
            {entry.technologies.map(tech => (
              <Badge key={tech} variant="secondary" className="text-xs">{tech}</Badge>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}

export function ExperienceSection() {
  const experiences = getAllExperienceEntries();

  if (experiences.length === 0) {
    return null; // Don't render section if no experience data
  }

  return (
    <SectionWrapper>
      <SectionHeader
        title="Work Experience"
        subtitle="My professional journey and key contributions."
      />
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {experiences.map((entry, index) => (
          <ExperienceCard key={index} entry={entry} />
        ))}
      </div>
    </SectionWrapper>
  );
}

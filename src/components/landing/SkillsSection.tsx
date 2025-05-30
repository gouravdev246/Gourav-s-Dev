
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILLS_CATEGORIES } from '@/constants/site';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import { CheckCircle } from 'lucide-react';

export function SkillsSection() {
  return (
    <SectionWrapper className="bg-muted">
      <SectionHeader
        title="My Expertise"
        subtitle="A collection of technologies and tools I'm proficient in."
      />
      <div className="grid grid-cols-1 gap-8"> {/* Modified for single category display */}
        {SKILLS_CATEGORIES.map((category) => (
          <Card key={category.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 md:columns-2 lg:columns-3"> {/* Added multi-column layout */}
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center break-inside-avoid-column"> {/* Added break-inside-avoid-column */}
                    <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                    <span className="text-sm text-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}

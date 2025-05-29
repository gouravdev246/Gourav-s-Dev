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
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {SKILLS_CATEGORIES.map((category) => (
          <Card key={category.name} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">{category.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center">
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

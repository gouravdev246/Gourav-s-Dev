import { HeroSection } from '@/components/landing/HeroSection';
import { ProjectsPreview } from '@/components/landing/ProjectsPreview';
import { SkillsSection } from '@/components/landing/SkillsSection';

export default function HomePage() {
  return (
    <div className="space-y-12 md:space-y-16 lg:space-y-20">
      <HeroSection />
      <ProjectsPreview />
      <SkillsSection />
    </div>
  );
}

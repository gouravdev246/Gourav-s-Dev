import Image from 'next/image';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import { SITE_AUTHOR } from '@/constants/site';
import { CheckCircle } from 'lucide-react';

export function AboutContent() {
  return (
    <SectionWrapper>
      <SectionHeader
        title={`About ${SITE_AUTHOR}`}
        subtitle="A little more about my journey, passions, and what drives me."
      />
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center mb-12">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxhbmltZXxlbnwwfHx8fDE3NDg1NDIzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={`Portrait of ${SITE_AUTHOR}`}
              width={240}
              height={240}
              className="rounded-full shadow-xl object-cover"
              data-ai-hint="anime portrait"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-foreground mb-4">
              Hello! I&apos;m {SITE_AUTHOR}, a passionate and results-oriented software developer with a knack for crafting elegant and efficient solutions to complex problems. My journey in technology has been driven by a relentless curiosity and a desire to build things that make a difference.
            </p>
            <p className="text-lg text-foreground">
              I specialize in full-stack development, with a strong focus on modern JavaScript frameworks like React and Next.js, and I&apos;m always excited to explore emerging technologies, especially in the realm of Artificial Intelligence.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">My Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and building user-centric applications. Collaboration, continuous learning, and a proactive approach to problem-solving are core to my work ethic. I thrive in dynamic environments where I can contribute to innovative projects and grow alongside talented teams.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Key Strengths</h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Full-Stack Web Development",
                "AI Integration & Prompt Engineering",
                "Problem-Solving & Analytical Thinking",
                "Agile Methodologies & Team Collaboration",
                "Continuous Learning & Adaptability",
              ].map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Beyond the Code</h3>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, I enjoy [mention a hobby or two, e.g., exploring new hiking trails, reading about cutting-edge tech, or contributing to open-source projects]. These activities help me stay balanced and often inspire new perspectives in my professional work.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

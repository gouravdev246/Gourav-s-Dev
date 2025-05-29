
import Image from 'next/image';
import { SectionWrapper, SectionHeader } from '@/components/ui/section-wrapper';
import { SITE_AUTHOR } from '@/constants/site';
import { CheckCircle, GraduationCap } from 'lucide-react'; // Added GraduationCap

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
              src="https://images.unsplash.com/photo-1581397867212-e05b3692d16b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGJveXxlbnwwfHx8fDE3NDg1NDI0OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt={`Portrait of ${SITE_AUTHOR}`}
              width={240}
              height={240}
              className="rounded-full shadow-xl object-cover"
              data-ai-hint="anime portrait"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg text-foreground mb-4">
              Hello! I&apos;m Gourav Sarkar, a first-year Computer Science Engineering student at Lovely Professional University (LPU). My journey into technology is fueled by an insatiable curiosity for new discoveries, particularly within the exciting realms of tech and Artificial Intelligence.
            </p>
            <p className="text-lg text-foreground">
              I&apos;m currently diving deep into learning Python, and I&apos;m enthusiastic about building foundational skills that will allow me to create innovative solutions in the future. I&apos;m always eager to explore new concepts and contribute to impactful projects.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">My Philosophy</h3>
            <p className="text-muted-foreground leading-relaxed">
              I believe in the power of continuous learning and a hands-on approach to understanding complex systems. Collaboration and a proactive mindset are key to my learning process. I thrive in environments where I can ask questions, experiment, and grow alongside fellow learners and mentors.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Key Areas of Interest & Learning</h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Python Programming",
                "AI Tools",
                "Problem-Solving & Thinking",
                "Communication Skills & Confidence",
                "Web Development Fundamentals",
              ].map((strength, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Education</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>12th Grade: 85.2%</span>
              </li>
              <li className="flex items-start">
                <GraduationCap className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                <span>10th Grade: 73.57%</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-3">Beyond the Screen</h3>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not immersed in my studies or coding, I enjoy [mention a hobby or two, e.g., exploring new tech blogs, participating in coding challenges, or learning about space]. These activities help me stay balanced and often spark new ideas for my tech explorations.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

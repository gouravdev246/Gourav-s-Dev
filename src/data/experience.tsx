import type { ExperienceEntry } from '@/types';

export const WORK_EXPERIENCE_DATA: ExperienceEntry[] = [
  {
    company: "Innovatech Solutions",
    role: "Senior Software Engineer",
    startDate: "Jan 2021",
    endDate: "Present",
    description: (
      <>
        <p>Lead development of key features for a flagship SaaS product, focusing on scalability and user experience. Mentored junior engineers and contributed to architectural decisions.</p>
        <ul className="list-disc list-inside mt-2">
          <li>Developed and launched a new AI-powered analytics module.</li>
          <li>Improved system performance by 30% through code optimization and infrastructure upgrades.</li>
          <li>Championed agile methodologies, resulting in faster iteration cycles.</li>
        </ul>
      </>
    ),
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Docker"],
    logoUrl: "https://placehold.co/100x40.png",
    logoHint: "company logo",
  },
  {
    company: "Tech Solutions Inc.",
    role: "Software Developer",
    startDate: "Jun 2018",
    endDate: "Dec 2020",
    description: (
      <p>Contributed to various client projects, building full-stack web applications. Gained experience in a wide range of technologies and industries, working closely with cross-functional teams to deliver high-quality software solutions.</p>
    ),
    technologies: ["Java", "Spring Boot", "Angular", "MySQL", "Azure"],
    logoUrl: "https://placehold.co/100x40.png",
    logoHint: "tech company",
  },
  // Add more experience entries here
];

export function getAllExperienceEntries(): ExperienceEntry[] {
  return WORK_EXPERIENCE_DATA;
}

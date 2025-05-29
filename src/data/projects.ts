import type { Project } from '@/types';

const PROJECTS_DATA: Project[] = [
  {
    slug: 'portfolio-revamp',
    title: 'Personal Portfolio Website',
    description: 'A dynamic and interactive showcase of my projects and skills, built with Next.js and Tailwind CSS.',
    longDescription: (
      <>
        <p className="mb-4">This portfolio itself is a testament to modern web development practices. Designed to be fully responsive and engaging, it leverages server components for performance and showcases a clean, grid-based layout.</p>
        <p className="mb-4">Key features include dynamic project spotlights, an AI-powered content rewriter, and seamless navigation. The design philosophy focuses on clarity, elegance, and subtle interactions to enhance user experience.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Technologies Used:</h3>
        <ul className="list-disc list-inside">
          <li>Next.js (App Router)</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Shadcn/ui</li>
          <li>Genkit (for AI features)</li>
        </ul>
      </>
    ),
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'portfolio website',
    tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'AI'],
    liveDemoUrl: '/',
    codeRepoUrl: 'https://github.com/yourusername/portfolio', // Replace
    year: 2024,
    role: 'Full-Stack Developer & Designer',
    images: [
      { url: 'https://placehold.co/800x600.png', hint: 'website screenshot' },
      { url: 'https://placehold.co/800x600.png', hint: 'mockup design' },
    ],
  },
  {
    slug: 'ai-content-moderator',
    title: 'AI Content Moderator',
    description: 'A powerful tool using GenAI to analyze and moderate user-generated content in real-time.',
    longDescription: (
      <>
        <p className="mb-4">The AI Content Moderator is an advanced system designed to automatically detect and flag inappropriate content across various platforms. It utilizes natural language processing and machine learning models to understand context and nuances in text and images.</p>
        <p className="mb-4">This project involved training custom models and integrating with existing content management systems. It significantly reduced manual moderation efforts and improved platform safety.</p>
        <h3 className="text-xl font-semibold mt-6 mb-2">Key Challenges & Solutions:</h3>
        <ul className="list-disc list-inside">
          <li>Achieving high accuracy with diverse content types.</li>
          <li>Ensuring real-time performance for large volumes of data.</li>
          <li>Minimizing false positives to maintain user satisfaction.</li>
        </ul>
      </>
    ),
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ai moderation',
    tags: ['Python', 'Machine Learning', 'NLP', 'API Development'],
    codeRepoUrl: 'https://github.com/yourusername/ai-moderator', // Replace
    year: 2023,
    role: 'AI Engineer',
     images: [
      { url: 'https://placehold.co/800x600.png', hint: 'dashboard interface' },
      { url: 'https://placehold.co/800x600.png', hint: 'system architecture' },
    ],
  },
  {
    slug: 'e-commerce-platform',
    title: 'Scalable E-commerce Platform',
    description: 'A feature-rich e-commerce solution with a focus on user experience and scalability, serving thousands of users.',
    longDescription: (
       <>
        <p className="mb-4">This e-commerce platform was built from the ground up to handle high traffic and a large product catalog. It includes features like personalized recommendations, secure payment gateway integration, and an intuitive admin dashboard for managing products and orders.</p>
        <p className="mb-4">The architecture was designed for microservices, allowing different parts of the system to scale independently. Performance optimization and security were top priorities throughout the development lifecycle.</p>
      </>
    ),
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'ecommerce platform',
    tags: ['Java', 'Spring Boot', 'React', 'Microservices', 'AWS'],
    liveDemoUrl: '#', // Replace with actual link or remove if not applicable
    year: 2022,
    role: 'Lead Backend Developer',
     images: [
      { url: 'https://placehold.co/800x600.png', hint: 'product page' },
      { url: 'https://placehold.co/800x600.png', hint: 'checkout process' },
    ],
  },
];

export function getAllProjects(): Project[] {
  return PROJECTS_DATA;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS_DATA.find(project => project.slug === slug);
}

export function getFeaturedProjects(count: number = 2): Project[] {
  // For now, just return the first 'count' projects.
  // Later, this could be based on a 'featured' flag or other criteria.
  return PROJECTS_DATA.slice(0, count);
}

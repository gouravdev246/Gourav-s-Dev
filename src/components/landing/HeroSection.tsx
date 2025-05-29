
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';
import { APP_NAME, SITE_AUTHOR, SITE_DESCRIPTION } from '@/constants/site';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted rounded-lg shadow-sm">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extold tracking-tight text-foreground">
            Welcome to <span className="text-primary">{APP_NAME}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl">
            Hi, I&apos;m {SITE_AUTHOR}. {SITE_DESCRIPTION}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block">
           <Image
            src="https://placehold.co/600x400.png"
            alt="Abstract representation of digital creativity"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="digital art technology"
            priority
          />
        </div>
      </div>
    </section>
  );
}

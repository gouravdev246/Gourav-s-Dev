
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { APP_NAME, SITE_AUTHOR, SITE_DESCRIPTION } from '@/constants/site';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-muted rounded-lg shadow-sm overflow-hidden"> {/* Added overflow-hidden for animations */}
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground animate-in fade-in slide-in-from-top-8 duration-700">
            Welcome to <span className="text-primary">{APP_NAME}</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-xl animate-in fade-in slide-in-from-top-10 duration-700 delay-200">
            Hi, I&apos;m {SITE_AUTHOR}. {SITE_DESCRIPTION}
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 transform">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </div>
        </div>
        <div className="hidden md:block animate-in fade-in zoom-in-90 duration-700 delay-400">
           <Image
            src="https://placehold.co/600x400.png"
            alt="An anime young boy"
            width={600}
            height={400}
            className="rounded-lg shadow-xl object-cover"
            data-ai-hint="anime boy"
            priority
          />
        </div>
      </div>
    </section>
  );
}

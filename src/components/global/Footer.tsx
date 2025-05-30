import Link from 'next/link';
import { APP_NAME, SOCIAL_LINKS, SITE_AUTHOR } from '@/constants/site';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} {SITE_AUTHOR}. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={social.name}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

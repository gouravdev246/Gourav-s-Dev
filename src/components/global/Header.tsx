
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { APP_NAME, NAV_LINKS } from '@/constants/site';
import type { NavItem } from '@/types';
import { ThemeToggleButton } from '@/components/theme/ThemeToggleButton';

const NavLink = ({ href, label, icon: Icon, currentPath, onClick }: NavItem & { currentPath: string; onClick?: () => void }) => {
  const isActive = currentPath === href || (href === '/' ? currentPath.startsWith('/#') : currentPath.startsWith(href + '/'));
  
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={onClick}
        className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${isActive
                      ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary'
                      : 'text-foreground/70 hover:bg-muted hover:text-foreground/90'
                    }`}
        aria-current={isActive ? 'page' : undefined}
      >
        <Icon className="h-4 w-4" />
        {label}
      </a>
    </Link>
  );
};

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


  if (!isMounted) {
    // This simplified placeholder is for the initial server render before hydration.
    // The ThemeToggleButton itself handles its icon placeholder during client-side hydration.
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">
            {APP_NAME}
          </Link>
          <div className="flex items-center space-x-2">
             <div className="h-10 w-10 bg-muted rounded-md animate-pulse" /> {/* Placeholder for Theme Toggle */}
             <div className="h-8 w-8 bg-muted rounded-md animate-pulse md:hidden" /> {/* Placeholder for Mobile Menu Button */}
          </div>
          <nav className="hidden md:flex items-center space-x-2">
             {NAV_LINKS.map((item, index) => ( <div key={index} className="h-8 w-20 bg-muted rounded-md animate-pulse" /> ))}
             {/* Desktop theme toggle placeholder already covered by the one above if we move it outside nav */}
          </nav>
        </div>
      </header>
    );
  }


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary hover:opacity-80 transition-opacity">
          {APP_NAME}
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          <nav className="flex items-center space-x-1">
            {NAV_LINKS.map((item) => (
              <NavLink key={item.href} {...item} currentPath={pathname} />
            ))}
          </nav>
          <ThemeToggleButton />
        </div>

        {/* Mobile Navigation & Theme Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-4">
              <div className="flex justify-between items-center mb-6">
                <Link href="/" className="text-lg font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  {APP_NAME}
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-2">
                {NAV_LINKS.map((item) => (
                  <NavLink
                    key={item.href}
                    {...item}
                    currentPath={pathname}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

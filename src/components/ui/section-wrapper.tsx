import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements; // To allow specifying semantic element like 'section', 'div', etc.
}

export function SectionWrapper({ children, className, as: Component = 'section', ...props }: SectionWrapperProps) {
  return (
    <Component className={cn('py-12 md:py-16 lg:py-20', className)} {...props}>
      {children}
    </Component>
  );
}

interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    className?: string;
}

export function SectionHeader({ title, subtitle, className, ...props }: SectionHeaderProps) {
    return (
        <div className={cn('mb-8 md:mb-12 text-center', className)} {...props}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="mt-2 md:mt-3 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                </p>
            )}
        </div>
    );
}

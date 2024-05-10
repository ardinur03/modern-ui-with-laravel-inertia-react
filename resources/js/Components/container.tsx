import { cn } from '@/lib/utils';
import React from 'react';

const Container = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('mx-auto max-w-screen-xl px-4 sm:px-6', className)} {...props} />
    ),
);
Container.displayName = 'Container';

export { Container };

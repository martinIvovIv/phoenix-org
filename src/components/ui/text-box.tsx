import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export const TextBox = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'bg-fg m-0 w-full text-balance rounded-xl py-3 pl-6 pr-3 text-lg font-medium leading-snug md:max-w-4xl md:py-5 md:pl-10 md:pr-6',
        className
      )}
    >
      {children}
    </div>
  );
};

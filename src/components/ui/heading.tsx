import { cn } from '@/lib/utils';

export const Heading = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        'text-xl font-extrabold md:text-2xl md:tracking-wide lg:text-3xl',
        className
      )}
    >
      {children}
    </h1>
  );
};

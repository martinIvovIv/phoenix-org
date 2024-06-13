import { ReactNode } from 'react';

export const TextBox = ({ children }: { children: ReactNode }) => {
  //leading-snug
  //text-lg
  return (
    <div className="bg-fg m-0 w-full text-balance rounded-xl py-3 pl-6 pr-3 text-lg font-medium leading-snug md:max-w-4xl md:py-5 md:pl-10 md:pr-6">
      {children}
    </div>
  );
};

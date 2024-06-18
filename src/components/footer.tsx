import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import * as m from '@/paraglide/messages';

export const Footer = () => {
  return (
    <footer>
      <div className="bg-fg flex flex-col gap-2 pb-4 text-center">
        <Separator />
        <h1>{m.og_footer_sponsors()}</h1>
        <Separator />
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <div className="flex max-w-[270px] flex-row-reverse items-center justify-center gap-2 sm:flex-col">
            <p>{m.municipality_of_varna()}</p>
            <Image
              src="/Varna.png"
              height={150}
              width={150}
              className="size-[150px] min-w-[150px] object-contain"
              alt={m.municipality_of_varna_logo()}
              priority={false}
            />
          </div>
          <div className="flex max-w-[270px] flex-row-reverse items-center justify-center gap-2 sm:flex-col">
            <p className="max-w-52 sm:max-w-fit">{m.vum_varna()}</p>
            <Image
              src="/Vum.png"
              height={150}
              width={150}
              className="size-[150px] min-w-[150px] object-contain"
              alt={m.vum_varna_logo()}
              priority={false}
            />
          </div>
          <div className="flex max-w-[270px] flex-row-reverse items-center justify-center gap-2 sm:flex-col">
            <p>{m.fond_kultura_varna()}</p>
            <Image
              src="/FondCulture.jpg"
              height={150}
              width={150}
              className="size-[150px] min-w-[150px] object-contain"
              alt={m.fond_kultura_varna_logo()}
              priority={false}
            />
          </div>
        </div>
      </div>

      <p className="text-muted-foreground bottom-2 w-full text-center text-sm">
        Created {new Date().getFullYear()} By{' '}
        <Button variant="link" className="p-0" asChild>
          <a href="https://www.martinivoviv.com/" target="_blank">
            Martin Ivanov
          </a>
        </Button>
      </p>
    </footer>
  );
};

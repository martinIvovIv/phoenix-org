import Image from 'next/image';

import { AboutUsDropDown } from '../about-us-dropdown';
import { Icons } from '../icons';
import { ThemeSwitcher } from '../theme-switcher';
import { LanguageSwitcher } from './language-switcher';
import { MobileMenu } from './mobile-menu';

import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

const HOME_PATH = '/';
// const ABOUT_MISSION = '/about/mission';
const GALLERY = '/gallery';
const JUNIOR = '/junior';
const CONTACTS = '/contacts';

export const Navbar = async () => {
  return (
    <header className="bg-fg w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex flex-row items-center  gap-1.5 text-base font-bold leading-relaxed sm:gap-3 sm:tracking-tighter  md:gap-4 md:text-lg md:tracking-tight lg:gap-7 lg:text-xl">
          <Image
            src="/favicon/android-chrome-192x192.png"
            height={55}
            width={55}
            className="size-[55] object-contain"
            alt={m.fenix_logo_alt()}
            priority={true}
          />

          <div className="hidden flex-row items-center hover:underline sm:inline-flex sm:gap-0.5 md:gap-1 lg:gap-2">
            <Icons.home className="size-4" aria-hidden={true} />
            <Link href={HOME_PATH}>{m.og_nav_beginning_home()}</Link>
          </div>

          <div className="hidden flex-row items-center hover:underline sm:inline-flex sm:gap-0.5 md:gap-1 lg:gap-2">
            <Icons.userPlus className="size-4" aria-hidden={true} />
            <AboutUsDropDown />
          </div>

          <div className="hidden flex-row items-center hover:underline sm:inline-flex sm:gap-0.5 md:gap-1 lg:gap-2">
            <Icons.images className="size-4" aria-hidden={true} />
            <Link href={GALLERY}>{m.og_nav_gallery()}</Link>
          </div>

          <div className="hidden flex-row items-center hover:underline sm:inline-flex sm:gap-0.5 md:gap-1 lg:gap-2">
            <Icons.person className="size-4" aria-hidden={true} />
            <Link href={JUNIOR} className="whitespace-nowrap">
              {m.og_nav_fenix_junior()}
            </Link>
          </div>

          <div className="hidden flex-row items-center hover:underline sm:inline-flex sm:gap-0.5 md:gap-1 lg:gap-2">
            <Icons.phone className="size-4" aria-hidden={true} />
            <Link href={CONTACTS} className="whitespace-nowrap">
              {m.og_nav_contact_us()}
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center gap-3 sm:flex-row-reverse sm:gap-3 ">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

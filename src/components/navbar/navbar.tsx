import Image from 'next/image';

import { AboutUsDropDown } from '../about-us-dropdown';
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
        <div className="flex flex-row items-center  gap-1.5 text-base font-bold leading-relaxed  tracking-tight  sm:gap-3 md:gap-5 md:text-lg lg:gap-7 lg:text-xl">
          <Image
            src="/favicon/android-chrome-192x192.png"
            height={55}
            width={55}
            className="size-[55] object-contain"
            alt={m.fenix_logo_alt()}
            priority={true}
          />
          <Link
            className="hidden hover:underline sm:inline-block"
            href={HOME_PATH}
          >
            {m.og_nav_beginning_home()}
          </Link>
          <AboutUsDropDown />
          <Link
            href={GALLERY}
            className="hidden hover:underline sm:inline-block"
          >
            {m.og_nav_gallery()}
          </Link>
          <Link
            href={JUNIOR}
            className="hidden whitespace-nowrap hover:underline sm:inline-block"
          >
            {m.og_nav_fenix_junior()}
          </Link>
          <Link
            href={CONTACTS}
            className="hidden whitespace-nowrap hover:underline sm:inline-block"
          >
            {m.og_nav_contact_us()}
          </Link>
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

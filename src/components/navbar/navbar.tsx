import { ThemeSwitcher } from '../theme-switcher';
import { LanguageSwitcher } from './language-switcher';
import { MobileMenu } from './mobile-menu';

import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

const HOME_PATH = '/';
const ABOUT_MISSION = '/about/mission';
const GALLERY = '/gallery';
const JUNIOR = '/junior';
const CONTACTS = '/contacts';

export const Navbar = async () => {
  return (
    <header className="bg-fg w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex flex-row items-center  gap-2 text-base font-bold leading-relaxed  tracking-tight  sm:gap-3 md:gap-5 md:text-lg lg:gap-7 lg:text-xl">
          <Link
            className="hidden hover:underline sm:inline-block"
            href={HOME_PATH}
          >
            {m.og_nav_beginning_home()}
          </Link>
          <Link
            href={ABOUT_MISSION}
            className="hidden hover:underline sm:inline-block"
          >
            {m.og_nav_about_us()}
          </Link>
          <Link
            href={GALLERY}
            className="hidden hover:underline sm:inline-block"
          >
            {m.og_nav_gallery()}
          </Link>
          <Link
            href={JUNIOR}
            className="hidden hover:underline sm:inline-block"
          >
            {m.og_nav_fenix_junior()}
          </Link>
          <Link
            href={CONTACTS}
            className="hidden hover:underline sm:inline-block"
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

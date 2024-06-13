import { ThemeSwitcher } from '../theme-switcher';
import { LanguageSwitcher } from './language-switcher';
import { MobileMenu } from './mobile-menu';

import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

export const Navbar = async () => {
  return (
    <header className="bg-fg w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          {m.app_name()}
        </Link>

        <div className="flex flex-row items-center gap-2 sm:flex-row-reverse sm:gap-3 ">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <MobileMenu />
          <Link
            className="hidden font-mono text-xl tracking-tighter hover:underline sm:inline-block"
            href={'/'}
          >
            {m.og_nav_beginning_home()}
          </Link>
        </div>
      </div>
    </header>
  );
};

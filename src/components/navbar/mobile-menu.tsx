'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Icons } from '../icons';
import { Button } from '../ui/button';

import { cn } from '@/lib/utils';
import * as m from '@/paraglide/messages';

const HOME_PATH = '/';
const ABOUT_MISSION = '/about/mission';
const GALLERY = '/gallery';
const JUNIOR = '/junior';
const CONTACTS = '/contacts';

export const MobileMenu = ({ className }: { className?: string }) => {
  const pathname = usePathname();

  return (
    <div className={cn('sm:hidden', className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Button variant="secondary" size="icon">
            <Icons.menu role="menu" />
          </Button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            hideWhenDetached={true}
            className="bg-primary dark:bg-secondary text-primary-foreground dark:text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-20 data-[state=open]:fade-in-20 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 mt-5 flex flex-col items-stretch rounded-l-md rounded-br-sm text-xl font-medium leading-tight tracking-wide"
          >
            <Link
              href={HOME_PATH}
              className={cn(
                'py-2 pl-3 pr-4 text-center',
                pathname === HOME_PATH &&
                  'font-bold underline underline-offset-2'
              )}
            >
              <DropdownMenu.Item>{m.og_nav_beginning_home()}</DropdownMenu.Item>
            </Link>
            <Link
              href={ABOUT_MISSION}
              className={cn(
                'py-2 pl-3 pr-4 text-center',
                pathname === ABOUT_MISSION &&
                  'font-bold underline underline-offset-2'
              )}
            >
              <DropdownMenu.Item>{m.og_nav_about_us()}</DropdownMenu.Item>
            </Link>
            <Link
              href={GALLERY}
              className={cn(
                'py-2 pl-3 pr-4 text-center',
                pathname === GALLERY && 'font-bold underline underline-offset-2'
              )}
            >
              <DropdownMenu.Item>{m.og_nav_gallery()}</DropdownMenu.Item>
            </Link>
            <Link
              href={JUNIOR}
              className={cn(
                'py-2 pl-3 pr-4 text-center',
                pathname === JUNIOR && 'font-bold underline underline-offset-2'
              )}
            >
              <DropdownMenu.Item>{m.og_nav_fenix_junior()}</DropdownMenu.Item>
            </Link>
            <Link
              href={CONTACTS}
              className={cn(
                'py-2 pl-3 pr-4 text-center',
                pathname === CONTACTS &&
                  'font-bold underline underline-offset-2'
              )}
            >
              <DropdownMenu.Item>{m.og_nav_contact_us()}</DropdownMenu.Item>
            </Link>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

import { Separator } from './ui/separator';

import { cn } from '@/lib/utils';
import * as m from '@/paraglide/messages';

const ABOUT_MISSION = '/about/mission';
const ABOUT_ACTIVITIES = '/about/activities';
const ABOUT_AWARDS = '/about/awards';
const ABOUT_PROJECTS = '/about/projects';
const ABOUT_FOUNDERS = '/about/founders';

export const AboutUsDropDown = ({ className }: { className?: string }) => {
  return (
    <div className={cn('hidden sm:inline-block', className)}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Link
            href={ABOUT_MISSION}
            className="hidden whitespace-nowrap hover:underline sm:inline-block"
          >
            {m.og_nav_about_us()}
          </Link>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            hideWhenDetached={true}
            className="bg-secondary dark:bg-secondary text-secondary-foreground dark:text-primary data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-20 data-[state=open]:fade-in-20 data-[state=closed]:zoom-out-90 data-[state=open]:zoom-in-90 mt-3 flex min-w-[100vw] flex-col items-stretch rounded-l-md rounded-br-sm text-xl font-bold leading-tight tracking-wide"
          >
            <Link
              href={ABOUT_MISSION}
              className={
                'underline-offset-3 py-4 text-center hover:text-2xl hover:underline'
              }
            >
              <DropdownMenu.Item>
                {m.og_nav_about_us()}: {m.og_nav_missions()}
              </DropdownMenu.Item>
            </Link>
            <Separator />
            <Link
              href={ABOUT_ACTIVITIES}
              className={
                'underline-offset-3 py-4 text-center hover:text-2xl hover:underline'
              }
            >
              <DropdownMenu.Item>
                {m.og_nav_about_us()}: {m.og_nav_activities()}
              </DropdownMenu.Item>
            </Link>
            <Separator />
            <Link
              href={ABOUT_AWARDS}
              className={
                'underline-offset-3 py-4 text-center hover:text-2xl hover:underline'
              }
            >
              <DropdownMenu.Item>
                {m.og_nav_about_us()}: {m.og_nav_awards_only()}
              </DropdownMenu.Item>
            </Link>
            <Separator />
            <Link
              href={ABOUT_PROJECTS}
              className={
                'underline-offset-3 py-4 text-center hover:text-2xl hover:underline'
              }
            >
              <DropdownMenu.Item>
                {m.og_nav_about_us()}: {m.og_nav_projects()}
              </DropdownMenu.Item>
            </Link>
            <Separator />
            <Link
              href={ABOUT_FOUNDERS}
              className={
                'underline-offset-3 py-4 text-center hover:text-2xl hover:underline'
              }
            >
              <DropdownMenu.Item>
                {m.og_nav_about_us()}: {m.og_nav_founders()}
              </DropdownMenu.Item>
            </Link>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

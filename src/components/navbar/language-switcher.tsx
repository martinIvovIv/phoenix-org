'use client';

import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from '@/lib/i18n';
import * as m from '@/paraglide/messages';
import { languageTag } from '@/paraglide/runtime';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Button
      variant="secondary"
      size="icon"
      aria-label={m.lanugage_toggle_label()}
      onClick={() =>
        router.push(pathname, { locale: languageTag() === 'bg' ? 'en' : 'bg' })
      }
    >
      {languageTag().toUpperCase()}
    </Button>
  );
};

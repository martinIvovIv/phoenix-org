import { env } from '@/env.mjs';
import * as m from '@/paraglide/messages';

export const siteConfig = {
  title: m.meta_title,
  description: m.meta_description,
  keywords: () => [
    // m.meta_keyword_example(),
    m.meta_title(),
  ],
  url: () => env.APP_URL || 'https://example.com',
  googleSiteVerificationId: () => env.GOOGLE_SITE_VERIFICATION_ID || '',
};

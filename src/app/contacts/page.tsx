import Link from 'next/link';

import { Icons } from '@/components/icons';
import { Heading } from '@/components/ui/heading';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Contacts = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox>
        <Heading>{m.contect_us_page_header()}</Heading>
      </TextBox>
      <TextBox>
        <div>
          <div className="flex gap-2">
            <Icons.phone className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_mobile()}</h2>
          </div>
          <p>{m.contect_us_page_mobile_one()}</p>
          <p>{m.contect_us_page_mobile_two()}</p>
        </div>
      </TextBox>
      <TextBox>
        <div className="flex flex-row gap-2 md:gap-3">
          <div className="flex gap-2">
            <Icons.email className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_email()}</h2>
          </div>
          <p>{m.contect_us_page_email_one()}</p>
        </div>
      </TextBox>
      <TextBox className="flex flex-col gap-2 text-wrap">
        <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-3">
          <div className="flex gap-2">
            <Icons.facebook className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_facebook()}</h2>
          </div>
          <Link
            href={
              'https://www.facebook.com/p/Театрална-формация-Феникс-100064725641328/'
            }
            target="_blank"
            className="overflow-auto break-words underline underline-offset-4"
          >
            <p>{m.contect_us_page_facebook_one()}</p>
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row sm:gap-2 md:gap-3">
          <div className="flex gap-2">
            <Icons.facebook className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_facebook_junior()}</h2>
          </div>
          <Link
            href={'https://www.facebook.com/fenixJunior/'}
            target="_blank"
            className="overflow-auto break-words underline underline-offset-4"
          >
            <p>{m.contect_us_page_facebook_two()}</p>
          </Link>
        </div>
      </TextBox>
      <TextBox>
        <div className="flex flex-row gap-2 md:gap-3">
          <div className="flex gap-2">
            <Icons.youtube className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_youtube()}</h2>
          </div>
          <Link
            href={'https://www.youtube.com/channel/UCISBoksxULAd04Avey4DPTQ'}
            target="_blank"
            className="overflow-auto break-words underline underline-offset-4"
          >
            <p>{m.contect_us_page_youtube_one()}</p>
          </Link>
        </div>
      </TextBox>
    </section>
  );
};

export default Contacts;

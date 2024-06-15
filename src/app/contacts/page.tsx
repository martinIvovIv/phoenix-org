import { Icons } from '@/components/icons';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Contacts = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox className="text-xl font-extrabold  md:text-2xl md:tracking-wide lg:text-3xl">
        <h1>{m.contect_us_page_header()}</h1>
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
      <TextBox>
        <div className="flex flex-row gap-2 md:gap-3">
          <div className="flex gap-2">
            <Icons.facebook className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_facebook()}</h2>
          </div>
          <p className="overflow-auto break-words">
            {m.contect_us_page_facebook_one()}
          </p>
        </div>
      </TextBox>
      <TextBox>
        <div className="flex flex-row gap-2 md:gap-3">
          <div className="flex gap-2">
            <Icons.youtube className="size-6" />
            <h2 className="font-bold">{m.contect_us_page_youtube()}</h2>
          </div>
          <p className="overflow-auto break-words">
            {m.contect_us_page_youtube_one()}
          </p>
        </div>
      </TextBox>
    </section>
  );
};

export default Contacts;

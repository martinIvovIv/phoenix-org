import Image from 'next/image';

import { Heading } from '@/components/ui/heading';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Activities = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox className="flex flex-col gap-3 md:gap-4">
        <Heading>{m.about_us_activities_heading_one()}</Heading>
        <p>{m.about_us_activities_p_one()}</p>
        <p>{m.about_us_activities_p_two()}</p>
      </TextBox>
      <TextBox className="flex flex-col gap-3 md:gap-4">
        <Heading>{m.about_us_activities_heading_two()}</Heading>
        <p>{m.about_us_activities_p_two_one()}</p>
      </TextBox>
      <TextBox className="flex w-auto justify-center align-middle md:px-4  ">
        <Image
          src="/HonorByVarna.jpg"
          width={567.75}
          height={834}
          alt={m.about_us_certificate_alt()}
          priority={true}
        />
      </TextBox>
    </section>
  );
};

export default Activities;

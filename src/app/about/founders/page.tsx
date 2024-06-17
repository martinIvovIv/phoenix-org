import Image from 'next/image';

import { Heading } from '@/components/ui/heading';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Founders = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:flex-row md:py-7 lg:py-8">
      <TextBox className="flex flex-col gap-3 md:gap-4">
        <Heading>{m.founders_name()}</Heading>
        <p>{m.founders_p_one()}</p>
        <p>{m.founders_p_two()}</p>
        <p>{m.founders_p_three()}</p>
      </TextBox>

      <TextBox className="flex w-auto justify-center align-middle md:px-4  ">
        <Image
          src="/SvStoyanov.jpg"
          width={256}
          height={320}
          alt={'portrait Svilen Stoyanov'}
          priority={true}
        />
      </TextBox>
    </section>
  );
};

export default Founders;

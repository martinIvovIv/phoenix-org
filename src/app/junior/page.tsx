import { TextBox } from '@/components/ui/text-box';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

const FenixJunior = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox>{m.fenix_jnr_p_one()}</TextBox>
      <TextBox>{m.fenix_jnr_p_two()}</TextBox>
      <TextBox>{m.fenix_jnr_p_three()}</TextBox>
      <TextBox>{m.fenix_jnr_p_four()}</TextBox>
      <TextBox>{m.fenix_jnr_p_five()}</TextBox>
      <TextBox>
        {m.fenix_jnr_p_six_one()}
        <Link
          className="underline underline-offset-1 hover:underline-offset-2"
          href="https://www.facebook.com/fenixJunior"
          target="_blank"
        >
          {m.fenix_jnr_p_six_link()}
        </Link>
        {m.fenix_jnr_p_six_two()}
      </TextBox>
      <TextBox className="font-bold">{m.fenix_jnr_bold_seven()}</TextBox>
    </section>
  );
};

export default FenixJunior;

import { Heading } from '@/components/ui/heading';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Mission = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox className="flex flex-col gap-3 md:gap-4">
        <Heading>{m.about_us_mission_about_heading_one()}</Heading>
        <p>{m.about_us_mission_about_p_one()}</p>
        <p>{m.about_us_mission_about_p_two()}</p>
        <div className="flex flex-col gap-0.5">
          <p>{m.about_us_mission_about_p_three()}</p>
          <p>{m.about_us_mission_about_p_four()}</p>
          <p>{m.about_us_mission_about_p_five()}</p>
          <p>{m.about_us_mission_about_p_six()}</p>
          <p>{m.about_us_mission_about_p_seven()}</p>
        </div>
      </TextBox>
      <TextBox className="flex flex-col gap-3 md:gap-4">
        <Heading>{m.about_us_mission_about_heading_two()}</Heading>
        <p>{m.about_us_mission_about_p_two_one()}</p>
        <div className="flex flex-col gap-1">
          <h3>{m.about_us_mission_about_ul_label()}</h3>
          <ul className="list-inside list-disc">
            <li>{m.about_us_mission_about_li_one()}</li>
            <li>{m.about_us_mission_about_li_two()}</li>
            <li>{m.about_us_mission_about_li_three()}</li>
            <li>{m.about_us_mission_about_li_four()}</li>
            <li>{m.about_us_mission_about_li_five()}</li>
          </ul>
        </div>
        <p>{m.about_us_mission_about_two_two()}</p>
      </TextBox>
    </section>
  );
};

export default Mission;

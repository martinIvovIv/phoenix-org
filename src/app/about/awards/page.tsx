import { ReactNode } from 'react';

import { Icons } from '@/components/icons';
import { Heading } from '@/components/ui/heading';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Competition = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <TextBox className="flex flex-col gap-2 md:gap-4">
      <h2 className="text-lg font-bold leading-tight tracking-tight md:text-xl lg:text-2xl">
        {title}
      </h2>
      {children}
    </TextBox>
  );
};

/**
 * DEVELOPERS NOTE: there is really no point wasting time implementing an elegant solution here
 */
const EventAndAward = ({
  event,
  award,
  secondaryAward,
  thirdAward,
  forthAward,
  fifhAward,
  sixthAward,
}: {
  event: string;
  award: string;
  secondaryAward?: string;
  thirdAward?: string;
  forthAward?: string;
  fifhAward?: string;
  sixthAward?: string;
}) => {
  return (
    <div className="flex flex-col gap-1 ">
      <p className="leading-tight">{event}</p>
      <div className="flex flex-row items-center gap-2">
        <Icons.badge className="ml-2 size-4" aria-hidden={true} />
        <p className="font-semibold tracking-wide">{award}</p>
      </div>
      {secondaryAward && (
        <div className="flex flex-row items-center gap-2">
          <Icons.badge className="ml-2 size-4" aria-hidden={true} />
          <p className="font-semibold tracking-wide">{secondaryAward}</p>
        </div>
      )}
      {thirdAward && (
        <div className="flex flex-row items-center gap-2">
          <Icons.badge className="ml-2 size-4" aria-hidden={true} />
          <p className="font-semibold tracking-wide">{thirdAward}</p>
        </div>
      )}
      {forthAward && (
        <div className="flex flex-row items-center gap-2">
          <Icons.badge className="ml-2 size-4" aria-hidden={true} />
          <p className="font-semibold tracking-wide">{forthAward}</p>
        </div>
      )}
      {fifhAward && (
        <div className="flex flex-row items-center gap-2">
          <Icons.badge className="ml-2 size-4" aria-hidden={true} />
          <p className="font-semibold tracking-wide">{fifhAward}</p>
        </div>
      )}
      {sixthAward && (
        <div className="flex flex-row items-center gap-2">
          <Icons.badge className="ml-2 size-4" aria-hidden={true} />
          <p className="font-semibold tracking-wide">{sixthAward}</p>
        </div>
      )}
    </div>
  );
};

const Awards = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox>
        <Heading>{m.play_rewards()}</Heading>
      </TextBox>

      <TextBox className="flex flex-col gap-2 md:gap-4">
        <h2 className="text-lg font-bold leading-tight tracking-tight md:text-xl lg:text-2xl">
          {m.play_one()}
        </h2>
        <div className="flex flex-col gap-1 ">
          <p className="leading-tight">{m.play_one_event_one()}</p>
          <p className="font-semibold tracking-wide">
            {m.play_one_event_one_award()}
          </p>
        </div>
        <div className="flex flex-col gap-1 ">
          <p className="leading-tight">{m.play_one_event_two()}</p>
          <p className="font-semibold tracking-wide">
            {m.play_one_event_two_award()}
          </p>
        </div>
      </TextBox>

      <Competition title={m.play_two()}>
        <EventAndAward
          event={m.play_two_event_one()}
          award={m.play_two_event_one_award()}
        />
        <EventAndAward
          event={m.play_two_event_two()}
          award={m.play_two_event_two_award()}
        />
        <EventAndAward
          event={m.play_two_event_three()}
          award={m.play_two_event_three_award()}
        />
        <EventAndAward
          event={m.play_two_event_four()}
          award={m.play_two_event_four_award()}
        />
      </Competition>

      <Competition title={m.play_three()}>
        <EventAndAward
          event={m.play_three_event_one()}
          award={m.play_three_event_one_award()}
        />
        <EventAndAward
          event={m.play_three_event_two()}
          award={m.play_three_event_two_award()}
        />
        <EventAndAward
          event={m.play_three_event_three()}
          award={m.play_three_event_three_award()}
        />
      </Competition>

      <Competition title={m.play_four()}>
        <EventAndAward
          event={m.play_four_event_one()}
          award={m.play_four_event_one_award()}
        />
        <EventAndAward event="" award={m.play_four_event_two()} />
        <EventAndAward
          event={m.play_four_event_three()}
          award={m.play_four_event_three_award_one()}
          secondaryAward={m.play_four_event_three_award_two()}
        />
        <EventAndAward
          event={m.play_four_event_four()}
          award={m.play_four_event_four_award()}
        />
        <EventAndAward
          event={m.play_four_event_five()}
          award={m.play_four_event_five_award()}
        />
        <EventAndAward
          event={m.play_four_event_six()}
          award={m.play_four_event_six_award()}
        />
      </Competition>

      <Competition title={m.play_five()}>
        <EventAndAward
          event={m.play_five_event_one()}
          award={m.play_five_event_one_award()}
        />
        <EventAndAward
          event={m.play_five_event_two()}
          award={m.play_five_event_two_award()}
        />
        <EventAndAward
          event={m.play_five_event_three()}
          award={m.play_five_event_three_award_one()}
          secondaryAward={m.play_five_event_three_award_two()}
          thirdAward={m.play_five_event_three_award_three()}
        />
        <EventAndAward
          event={m.play_five_event_four()}
          award={m.play_five_event_four_award_one()}
          secondaryAward={m.play_five_event_four_award_two()}
          thirdAward={m.play_five_event_four_award_three()}
        />
        <EventAndAward
          event={m.play_five_event_five()}
          award={m.play_five_event_five_award()}
        />
        <EventAndAward
          event={m.play_five_event_six()}
          award={m.play_five_event_six_award_one()}
          secondaryAward={m.play_five_event_six_award_two()}
        />
        <EventAndAward event="" award={m.play_five_honor_award()} />
      </Competition>

      <Competition title={m.play_six()}>
        <EventAndAward
          event={m.play_six_event_one()}
          award={m.play_six_event_one_award()}
        />
        <EventAndAward
          event={m.play_six_event_two()}
          award={m.play_six_event_two_award_one()}
          secondaryAward={m.play_six_event_two_award_two()}
        />
        <EventAndAward
          event={m.play_six_event_three()}
          award={m.play_six_event_three_award()}
        />
        <EventAndAward
          event={m.play_six_event_four()}
          award={m.play_six_event_four_award_one()}
        />
        <EventAndAward
          event={m.play_six_event_five()}
          award={m.play_six_event_five_award()}
        />
        <EventAndAward
          event={m.play_six_event_six()}
          award={m.play_six_event_six_award()}
        />
      </Competition>

      <Competition title={m.play_seven()}>
        <EventAndAward
          event={m.play_seven_event_one()}
          award={m.play_seven_event_one_award()}
        />

        <EventAndAward
          event={m.play_seven_event_two()}
          award={m.play_seven_event_two_award_one()}
          secondaryAward={m.play_seven_event_two_award_two()}
          thirdAward={m.play_seven_event_two_award_three()}
          forthAward={m.play_seven_event_two_award_four()}
          fifhAward={m.play_seven_event_two_award_five()}
          sixthAward={m.play_seven_event_two_award_six()}
        />

        <EventAndAward
          event={m.play_seven_event_three()}
          award={m.play_seven_event_three_award()}
        />
      </Competition>

      <Competition title={m.play_eight()}>
        <EventAndAward
          event={m.play_eight_event_one()}
          award={m.play_eight_event_one_award()}
        />
        <EventAndAward
          event={m.play_eight_event_two()}
          award={m.play_eight_event_two_award()}
        />
        <EventAndAward
          event={m.play_eight_event_three()}
          award={m.play_eight_event_three_award_one()}
          secondaryAward={m.play_eight_event_three_award_two()}
          thirdAward={m.play_eight_event_three_award_three()}
          forthAward={m.play_eight_event_three_award_four()}
        />
        <EventAndAward
          event={m.play_eight_event_four()}
          award={m.play_eight_event_four_award()}
        />
        <EventAndAward
          event={m.play_eight_event_five()}
          award={m.play_eight_event_five_award()}
        />
      </Competition>

      <Competition title={m.play_nine()}>
        <EventAndAward
          event={m.play_nine_event_one()}
          award={m.play_nine_event_one_award()}
        />
        <EventAndAward
          event={m.play_nine_event_two()}
          award={m.play_nine_event_two_award()}
        />
      </Competition>
    </section>
  );
};

export default Awards;

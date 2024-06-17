import { Heading } from '@/components/ui/heading';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

//TODO: styling
const ProjectComponent = ({
  title,
  completedIn,
  financedBy,
}: {
  title: string;
  completedIn: string;
  financedBy: string;
}) => {
  return (
    <TextBox className="flex flex-col gap-1 md:gap-2">
      <h3 className="text-lg font-semibold leading-snug">{title}</h3>
      <p>{completedIn}</p>
      <p>{financedBy}</p>
    </TextBox>
  );
};

const Projects = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox>
        <Heading>{m.projects_heading()}</Heading>
      </TextBox>

      <ProjectComponent
        title={m.project_one()}
        completedIn={m.project_one_time()}
        financedBy={m.project_one_finance_by()}
      />

      <ProjectComponent
        title={m.project_two()}
        completedIn={m.project_two_time()}
        financedBy={m.project_two_finance_by()}
      />

      <ProjectComponent
        title={m.project_three()}
        completedIn={m.project_three_time()}
        financedBy={m.project_three_finance_by()}
      />

      <ProjectComponent
        title={m.project_four()}
        completedIn={m.project_four_time()}
        financedBy={m.project_four_finance_by()}
      />

      <ProjectComponent
        title={m.project_five()}
        completedIn={m.project_five_time()}
        financedBy={m.project_five_finance_by()}
      />

      <ProjectComponent
        title={m.project_six()}
        completedIn={m.project_six_time()}
        financedBy={m.project_six_finance_by()}
      />

      <ProjectComponent
        title={m.project_seven()}
        completedIn={m.project_seven_time()}
        financedBy={m.project_seven_finance_by()}
      />

      <ProjectComponent
        title={m.project_eight()}
        completedIn={m.project_eight_time()}
        financedBy={m.project_eight_finance_by()}
      />

      <ProjectComponent
        title={m.project_nine()}
        completedIn={m.project_nine_time()}
        financedBy={m.project_nine_finance_by()}
      />

      <ProjectComponent
        title={m.project_ten()}
        completedIn={m.project_ten_time()}
        financedBy={m.project_ten_finance_by()}
      />

      <ProjectComponent
        title={m.project_eleven()}
        completedIn={m.project_eleven_time()}
        financedBy={m.project_eleven_finance_by()}
      />

      <ProjectComponent
        title={m.project_twelve()}
        completedIn={m.project_twelve_time()}
        financedBy={m.project_twelve_finance_by()}
      />

      <ProjectComponent
        title={m.project_thirteen()}
        completedIn={m.project_thirteen_time()}
        financedBy={m.project_thirteen_finance_by()}
      />

      <ProjectComponent
        title={m.project_fourteen()}
        completedIn={m.project_fourteen_time()}
        financedBy={m.project_fourteen_finance_by()}
      />

      <ProjectComponent
        title={m.project_fifteen()}
        completedIn={m.project_fifteen_time()}
        financedBy={m.project_fifteen_finance_by()}
      />
    </section>
  );
};

export default Projects;

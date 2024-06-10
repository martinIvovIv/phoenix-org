import * as m from '@/paraglide/messages';

const Home = () => {
  return (
    <section className="container mt-10 flex flex-col items-center gap-3 text-center md:absolute md:left-1/2 md:top-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2">
      <h1 className="mb-1 font-mono text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
        {m.starter_template_headline()}
      </h1>
      <p className="text-muted-foreground max-w-2xl">
        {m.starter_template_description()}
      </p>
    </section>
  );
};

export default Home;

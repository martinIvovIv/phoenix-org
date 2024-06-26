import { AudioPlayerComponent } from '@/components/audio-player';
import { TextBox } from '@/components/ui/text-box';
import * as m from '@/paraglide/messages';

const Home = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-4 sm:py-5 md:py-7 lg:py-8">
      <TextBox>
        <video width="100%" controls preload="metadata">
          <source src="/PhoenixIntro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TextBox>

      <TextBox>{m.og_home_p_one()}</TextBox>
      <TextBox>
        <div className="flex flex-col gap-3">
          <h3>{m.og_home_p_label_of_ul()}</h3>
          <ul className="flex list-outside list-disc flex-col gap-3 pl-4 sm:gap-4 md:pl-6">
            <li>{m.og_home_li_one()}</li>
            <li>{m.og_home_li_two()}</li>
            <li>{m.og_home_li_three()}</li>
            <li>{m.og_home_li_four()}</li>
            <li>{m.og_home_li_five()}</li>
            <li>{m.og_home_li_six()}</li>
          </ul>
        </div>
      </TextBox>

      <TextBox>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold sm:text-2xl">
            {m.og_home_song_title()}
          </h2>
          <AudioPlayerComponent />

          <ul className="flex flex-col gap-1 lg:gap-2">
            <li>{m.og_home_song_lyrics_p_one()}</li>
            <li>{m.og_home_song_lyrics_p_two()}</li>
            <li>{m.og_home_song_lyrics_p_three()}</li>
            <li>{m.og_home_song_lyrics_p_four()}</li>
            <li>{m.og_home_song_lyrics_p_five()}</li>
            <li>{m.og_home_song_lyrics_p_six()}</li>
            <li>{m.og_home_song_lyrics_p_seven()}</li>
            <li>{m.og_home_song_lyrics_p_eight()}</li>
            <li>{m.og_home_song_lyrics_p_nine()}</li>
            <li>{m.og_home_song_lyrics_p_ten()}</li>
            <li>{m.og_home_song_lyrics_p_eleven()}</li>
            <li>{m.og_home_song_lyrics_p_twelve()}</li>
            <li>{m.og_home_song_lyrics_p_thirteen()}</li>
            <li>{m.og_home_song_lyrics_p_fourteen()}</li>
          </ul>
          <p>{m.og_home_song_lyrics_p_fifteen()}</p>
        </div>
      </TextBox>
    </section>
  );
};

export default Home;

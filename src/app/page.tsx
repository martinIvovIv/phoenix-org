import { AudioPlayerComponent } from '@/components/audio-player';
import { TextBox } from '@/components/ui/text-box';
// import { VPlayer } from '@/components/VPlayer';
import * as m from '@/paraglide/messages';

const Home = () => {
  return (
    <section className="container flex flex-col items-center gap-3 py-10">
      <TextBox>
        <video width="100%" controls preload="metadata">
          <source src="/PhoenixIntro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </TextBox>

      <TextBox>{m.og_home_p_one()}</TextBox>
      <TextBox>
        <div className="flex flex-col gap-2">
          <p>{m.og_home_p_label_of_ul()}</p>
          <ul className="list-inside list-disc">
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
        <div className="flex flex-col gap-3">
          <p className="font-semibold">{m.og_home_song_title()}</p>
          <AudioPlayerComponent />

          <ul>
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

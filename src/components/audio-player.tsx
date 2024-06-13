'use client';

import 'react-h5-audio-player/lib/styles.css';

import AudioPlayer from 'react-h5-audio-player';

export const AudioPlayerComponent = () => {
  return (
    <AudioPlayer
      src="/FireBirds.wav"
      volume={0.5}
      // other props here
    />
  );
};

import React, { useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/bg-music.mp3');
    audioRef.current.loop = true;
    
    // Attempt auto-play immediately
    const attemptPlay = () => {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log('Autoplay prevented by browser, waiting for user interaction.');
        });
      }
    };

    attemptPlay();

    // Play as soon as the user touches, clicks, or scrolls
    const handleInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log('Audio play blocked:', e));
      }
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Removed the button entirely so it cannot be paused
  return null;
};

export default MusicPlayer;

import React, { useState, useEffect, useRef } from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Optional: Place an audio file URL here
  const audioRef = useRef(null);

  useEffect(() => {
    // In a real scenario, you'd have an actual audio source:
    audioRef.current = new Audio('/bg-music.mp3');
    audioRef.current.loop = true;
    
    // Attempt auto-play
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log('Autoplay prevented by browser, waiting for user interaction.');
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log('Audio play blocked:', e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: 'fixed', top: '2rem', right: '2rem', zIndex: 100 }}>
      <button 
        onClick={togglePlay}
        style={{
          background: 'rgba(212, 175, 55, 0.1)',
          border: '1px solid var(--color-gold)',
          color: 'var(--color-gold)',
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(5px)',
          transition: 'all 0.3s ease'
        }}
        aria-label="Toggle music"
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>
    </div>
  );
};

export default MusicPlayer;

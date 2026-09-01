import React, { useEffect, useState } from 'react';

const BackgroundEffects = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const emojis = ['🏵️', '🌼', '🌹', '🌺'];
    
    // Generate 75 dense flowers continuously falling
    const newFlowers = Array.from({ length: 75 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}vw`,
      fontSize: `${Math.random() * 25 + 35}px`, // Much larger flowers
      animationDuration: `${Math.random() * 15 + 8}s`, // Varied falling speed
      animationDelay: `${Math.random() * 20}s`, // Staggered start
      emoji: emojis[Math.floor(Math.random() * emojis.length)] // Mixed flowers
    }));
    setFlowers(newFlowers);
  }, []);

  return (
    <div className="particle-container" style={{ pointerEvents: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, overflow: 'hidden' }}>
      {flowers.map((flower) => (
        <div
          key={flower.id}
          className="marigold-flower"
          style={{
            position: 'absolute',
            top: '-50px',
            left: flower.left,
            fontSize: flower.fontSize,
            animation: `fall ${flower.animationDuration} linear ${flower.animationDelay} infinite`,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
          }}
        >
          {flower.emoji}
        </div>
      ))}
    </div>
  );
};

export default BackgroundEffects;

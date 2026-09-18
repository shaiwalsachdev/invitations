import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

export const Hero = () => {
  return (
    <section className="section-container" style={{ 
      height: '100dvh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '0.2rem',
      overflow: 'hidden',
      boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'absolute',
        top: '0.2rem', bottom: '0.2rem', left: '0.2rem', right: '0.2rem',
        border: '1px solid rgba(212,175,55,0.3)',
        borderRadius: '10px',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '0.5rem', bottom: '0.5rem', left: '0.5rem', right: '0.5rem',
        border: '1px solid rgba(212,175,55,0.15)',
        borderRadius: '8px',
        pointerEvents: 'none'
      }}></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.05 }
          }
        }}
        className="text-center"
        style={{
          background: 'linear-gradient(135deg, #FDFBF7, #FFF5E1)',
          padding: '3vh 0.5rem',
          borderRadius: '10px',
          boxShadow: '0 5px 20px rgba(0,0,0,0.2), inset 0 0 0 2px var(--color-gold), inset 0 0 10px rgba(212,175,55,0.2)',
          maxWidth: '100%',
          width: '100%',
          height: '100%',
          maxHeight: 'calc(100dvh - 1rem)',
          position: 'relative',
          zIndex: 2,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >
        {/* Decorative Corner Flowers */}
        <div style={{ position: 'absolute', top: '-10px', left: '-10px', fontSize: '2.5rem', opacity: 0.5, pointerEvents: 'none' }}>🌸</div>
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '2.5rem', opacity: 0.5, transform: 'scaleX(-1)', pointerEvents: 'none' }}>🌸</div>
        <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', fontSize: '2.5rem', opacity: 0.5, transform: 'scaleY(-1)', pointerEvents: 'none' }}>🌸</div>
        <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', fontSize: '2.5rem', opacity: 0.5, transform: 'scale(-1, -1)', pointerEvents: 'none' }}>🌸</div>
        
        {/* --- TOP SECTION --- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1vh', width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.2rem', width: '100%' }}>
            <motion.img 
              variants={fadeInUp}
              src="/new_logo.png" 
              alt="Shri Anandpur Dham Logo" 
              style={{ width: 'clamp(50px, 12vh, 70px)', height: 'auto', display: 'block', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3)) brightness(1.2)' }} 
            />
            
            <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', letterSpacing: '0.05em', fontWeight: 700, margin: 0 }}>
              श्री सतगुरु देवाय नमः (S.S.D.N.)
            </motion.p>
          </div>

          <motion.div variants={fadeInUp} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', gap: '0.2rem' }}>
            <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', opacity: 0.9, fontSize: 'clamp(0.8rem, 3vw, 1rem)', margin: 0 }}>
              Seeking the divine grace and your blessings,
            </motion.p>
            <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', opacity: 0.9, fontSize: 'clamp(0.7rem, 2.5vw, 0.9rem)', letterSpacing: '0.02em', textTransform: 'uppercase', margin: 0, textAlign: 'center', padding: '0 0.5rem' }}>
              We cordially invite you to the post wedding blessing ceremony of
            </motion.p>
          </motion.div>
        </div>

        {/* --- MIDDLE SECTION --- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2vh', width: '100%' }}>
          <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', flexWrap: 'nowrap' }}>
            <div style={{ textAlign: 'center', flex: 1 }}>
              <motion.h1 variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-red-accent)', fontSize: 'clamp(1.5rem, 6vw, 2.2rem)', lineHeight: '1', margin: 0, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
                Shaiwal
              </motion.h1>
              <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', opacity: 0.9, margin: 0, fontSize: 'clamp(0.6rem, 2vw, 0.8rem)' }}>
                (Son of Mrs. Seema & Kamal Sachdev)
              </motion.p>
            </div>
            
            <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(1rem, 3.5vw, 1.4rem)', margin: '0', opacity: 0.9 }}>
              With
            </motion.p>

            <div style={{ textAlign: 'center', flex: 1 }}>
              <motion.h1 variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-red-accent)', fontSize: 'clamp(1.5rem, 6vw, 2.2rem)', lineHeight: '1', margin: 0, textShadow: '1px 1px 3px rgba(0,0,0,0.2)' }}>
                Shaila
              </motion.h1>
              <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', opacity: 0.9, margin: 0, fontSize: 'clamp(0.6rem, 2vw, 0.8rem)' }}>
                (Daughter of Mrs. Mukta & Gurmeet Singh)
              </motion.p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} style={{ textAlign: 'center' }}>
            <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(1rem, 3.5vw, 1.2rem)', margin: 0, opacity: 0.9 }}>
              On
            </motion.p>
            <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(1.1rem, 4.5vw, 1.4rem)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0, fontWeight: 600 }}>
              10 December 2026
            </motion.p>
          </motion.div>

          {/* Events Container */}
          <motion.div variants={fadeInUp} style={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0 0.5rem', boxSizing: 'border-box' }}>
            <div style={{ 
              flex: '1', 
              background: 'rgba(253, 251, 247, 0.95)', 
              padding: '0.6rem', 
              borderRadius: '8px', 
              border: '1px solid var(--color-text-accent)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem', letterSpacing: '1px' }}>ॐ 🪔 🥁</div>
              <h4 className="font-serif" style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)', margin: 0, borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.2rem' }}>Kirtan & Satsang</h4>
              <p style={{ color: 'var(--color-text-accent)', fontWeight: 'bold', fontSize: 'clamp(0.75rem, 3vw, 0.9rem)', margin: '0.2rem 0' }}>4:30 PM – 6:30 PM</p>
            </div>
            
            <div style={{ 
              flex: '1', 
              background: 'rgba(253, 251, 247, 0.95)', 
              padding: '0.6rem', 
              borderRadius: '8px', 
              border: '1px solid var(--color-text-accent)',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.2rem', marginBottom: '0.2rem', letterSpacing: '1px' }}>🍽️ 🥗 ✨</div>
              <h4 className="font-serif" style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)', margin: 0, borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '0.2rem' }}>Dinner</h4>
              <p style={{ color: 'var(--color-text-accent)', fontWeight: 'bold', fontSize: 'clamp(0.75rem, 3vw, 0.9rem)', margin: '0.2rem 0' }}>7:00 PM – 10:00 PM</p>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1vh', width: '100%' }}>
          {/* Venue & Maps Row */}
          <motion.div variants={fadeInUp} style={{ display: 'flex', width: '100%', gap: '0.5rem', padding: '0 0.5rem', boxSizing: 'border-box', alignItems: 'center' }}>
            
            {/* Venue Info */}
            <div style={{ flex: '2', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)', margin: 0, opacity: 0.9 }}>
                At
              </motion.p>
              <motion.h3 variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(1rem, 4vw, 1.4rem)', margin: '0.1rem 0', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                Shri Anandpur Satsang Bhawan
              </motion.h3>
              <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', lineHeight: '1.2', opacity: 0.9, margin: 0 }}>
                9C, Block-A, Hind Nagar, Near Komal Ice Cream<br/>
                Opposite Kailash Palace, LDA Colony, Lko
              </motion.p>
            </div>

            {/* Map */}
            <div style={{ flex: '1', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.4)', height: '70px' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56987.9877977982!2d80.8202707486328!3d26.78426219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c0f69b640d691%3A0x1a19f03d21bcf90f!2sShri%20Anandpur%20Satsang%20Aashram%20(Madhur%20Satsang%20Dham)!5e0!3m2!1sen!2sin!4v1788282861467!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
              ></iframe>
            </div>
          </motion.div>

          {/* RSVP Block */}
          <motion.div variants={fadeInUp} style={{ 
            padding: '0.6rem 0.8rem', 
            background: 'rgba(253, 251, 247, 0.9)', 
            borderRadius: '8px', 
            border: '1px solid var(--color-text-accent)', 
            width: 'calc(100% - 1rem)',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
            boxSizing: 'border-box'
          }}>
            <div style={{ textAlign: 'left', flex: 1 }}>
              <h4 className="font-serif text-wine" style={{ fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', margin: 0, color: 'var(--color-text-dark)' }}>With Best Compliments From</h4>
              <h3 className="font-serif text-gold" style={{ fontSize: 'clamp(0.85rem, 3.5vw, 1.1rem)', margin: 0, color: 'var(--color-text-accent)' }}>Sachdev Family</h3>
            </div>
            
            <div style={{ borderLeft: '1px solid rgba(212,175,55,0.3)', paddingLeft: '0.5rem', textAlign: 'right', flex: 1 }}>
              <p style={{ fontSize: 'clamp(0.65rem, 2.5vw, 0.85rem)', letterSpacing: '0.05em', textTransform: 'uppercase', margin: 0, fontWeight: 600, color: 'var(--color-text-dark)' }}>RSVP</p>
              <p style={{ fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', margin: 0, color: 'var(--color-text-dark)' }}>Kamal: <strong style={{color: 'var(--color-red-accent)'}}>8052418822</strong></p>
              <p style={{ fontSize: 'clamp(0.7rem, 3vw, 0.9rem)', margin: 0, color: 'var(--color-text-dark)' }}>Seema: <strong style={{color: 'var(--color-red-accent)'}}>8127956641</strong></p>
            </div>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

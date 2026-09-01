import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } }
};

export const Hero = () => {
  return (
    <section className="section-container" style={{ 
      minHeight: '100vh', 
      justifyContent: 'center',
      position: 'relative',
      padding: '4rem 1rem'
    }}>
      <div style={{
        position: 'absolute',
        top: '2rem', bottom: '2rem', left: '2rem', right: '2rem',
        border: '1px solid rgba(212,175,55,0.3)',
        borderRadius: '20px',
        pointerEvents: 'none'
      }}></div>
      <div style={{
        position: 'absolute',
        top: '2.5rem', bottom: '2.5rem', left: '2.5rem', right: '2.5rem',
        border: '1px solid rgba(212,175,55,0.15)',
        borderRadius: '15px',
        pointerEvents: 'none'
      }}></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.3 }
          }
        }}
        className="text-center"
        style={{
          background: 'linear-gradient(135deg, #FDFBF7, #FFF5E1)',
          padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 3rem)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4), inset 0 0 0 4px var(--color-gold), inset 0 0 20px rgba(212,175,55,0.2)',
          maxWidth: '900px',
          width: '100%',
          position: 'relative',
          zIndex: 2,
          margin: '0 auto',
          overflow: 'hidden'
        }}
      >
        {/* Decorative Corner Flowers */}
        <div style={{ position: 'absolute', top: '-10px', left: '-10px', fontSize: '5rem', opacity: 0.7, pointerEvents: 'none' }}>🌸</div>
        <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '5rem', opacity: 0.7, transform: 'scaleX(-1)', pointerEvents: 'none' }}>🌸</div>
        <div style={{ position: 'absolute', bottom: '-10px', left: '-10px', fontSize: '5rem', opacity: 0.7, transform: 'scaleY(-1)', pointerEvents: 'none' }}>🌸</div>
        <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', fontSize: '5rem', opacity: 0.7, transform: 'scale(-1, -1)', pointerEvents: 'none' }}>🌸</div>
        
        <motion.img 
          variants={fadeInUp}
          src="/new_logo.png" 
          alt="Shri Anandpur Dham Logo" 
          style={{ width: '180px', height: 'auto', margin: '0 auto 2rem', display: 'block', filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.5)) brightness(1.2)' }} 
        />
        
        <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(1.2rem, 4vw, 2rem)', letterSpacing: '0.05em', marginBottom: '2rem', fontWeight: 700, textAlign: 'center', width: '100%' }}>
          श्री सतगुरु देवाय नमः (S.S.D.N.)
        </motion.p>
        
        <motion.div variants={fadeInUp} className="ornamental-divider" style={{ width: '150px', margin: '0 auto 2rem', opacity: 0.5 }}></motion.div>

        <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', marginBottom: '1rem', opacity: 0.9, fontSize: 'clamp(1rem, 3.5vw, 1.4rem)' }}>
          Seeking the divine grace and your blessings,
        </motion.p>
        <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', marginBottom: '3rem', opacity: 0.9, fontSize: 'clamp(0.9rem, 3vw, 1.2rem)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          We cordially invite you to the post wedding celebration of
        </motion.p>
        
        <motion.h1 variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-red-accent)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', marginBottom: '0.5rem', textShadow: '2px 4px 10px rgba(0,0,0,0.3)' }}>
          Shaiwal Sachdev
        </motion.h1>
        <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', opacity: 0.9, marginBottom: '2rem', fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)' }}>
          (Son of Mrs. Seema Sachdev & Kamal Sachdev)
        </motion.p>

        <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', margin: '1rem 0', opacity: 0.9 }}>
          With
        </motion.p>

        <motion.h1 variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-red-accent)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: '1', marginBottom: '0.5rem', textShadow: '2px 4px 10px rgba(0,0,0,0.3)' }}>
          Shaila Manaktahla
        </motion.h1>
        <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontStyle: 'italic', opacity: 0.9, marginBottom: '2rem', fontSize: 'clamp(0.9rem, 2.5vw, 1.2rem)' }}>
          (Daughter of Mrs. Mukta Manaktahla & Gurmeet Singh)
        </motion.p>

        <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', margin: '1rem 0 0.5rem', opacity: 0.9 }}>
          On
        </motion.p>

        <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(1.4rem, 4vw, 1.8rem)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1rem', fontWeight: 500 }}>
          10 December 2026
        </motion.p>
        
        <motion.div variants={fadeInUp} className="ornamental-divider" style={{ width: '100px', margin: '3rem auto 2rem', opacity: 0.3 }}></motion.div>

        {/* Events Container */}
        <motion.div variants={fadeInUp} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', marginBottom: '3rem', padding: '0 1rem' }}>
          
          <div style={{ 
            flex: '1 1 300px', 
            background: 'rgba(253, 251, 247, 0.95)', 
            padding: '2.5rem 2rem', 
            borderRadius: '15px', 
            border: '2px solid var(--color-text-accent)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '10px' }}>ॐ 🪔 🥁</div>
            <h4 className="font-serif" style={{ color: 'var(--color-text-dark)', fontSize: '2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>Kirtan, Satsang & Blessing</h4>
            <p style={{ color: 'var(--color-text-accent)', fontWeight: 'bold', letterSpacing: '0.15em', fontSize: '1.3rem', marginBottom: '1.5rem' }}>4:30 PM – 6:30 PM</p>
            <p style={{ color: 'var(--color-text-dark)', fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>Join us for devotional prayers, uplifting kirtan, and to receive the divine blessings of the Almighty and our Satguru.</p>
          </div>
          
          <div style={{ 
            flex: '1 1 300px', 
            background: 'rgba(253, 251, 247, 0.95)', 
            padding: '2.5rem 2rem', 
            borderRadius: '15px', 
            border: '2px solid var(--color-text-accent)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '10px' }}>🍽️ 🥗 ✨</div>
            <h4 className="font-serif" style={{ color: 'var(--color-text-dark)', fontSize: '2rem', marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>Dinner Celebration</h4>
            <p style={{ color: 'var(--color-text-accent)', fontWeight: 'bold', letterSpacing: '0.15em', fontSize: '1.3rem', marginBottom: '1.5rem' }}>7:00 PM – 10:00 PM</p>
            <p style={{ color: 'var(--color-text-dark)', fontSize: '1.1rem', lineHeight: '1.6', opacity: 0.9 }}>Followed by a lovingly prepared gathering and dinner for all guests to celebrate this joyous union together.</p>
          </div>

        </motion.div>

        {/* Venue Details appended directly to the first page */}
        <motion.p variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginBottom: '0.5rem', opacity: 0.9 }}>
          At
        </motion.p>
        <motion.h3 variants={fadeInUp} className="font-serif" style={{ color: 'var(--color-text-accent)', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', textShadow: '2px 4px 10px rgba(0,0,0,0.1)' }}>
          Shri Anandpur Satsang Bhawan
        </motion.h3>
        <motion.p variants={fadeInUp} style={{ color: 'var(--color-text-dark)', fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, letterSpacing: '0.05em', marginBottom: '3rem' }}>
          9C, Block-A, Hind Nagar<br/>
          Near Komal Ice Cream<br/>
          Opposite Kailash Palace, LDA Colony<br/>
          Lucknow - 226012
        </motion.p>

        {/* Maps Container */}
        <motion.div variants={fadeInUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', width: '100%', margin: '0 auto 4rem' }}>
          {/* Main Map */}
          <div style={{ flex: '1 1 300px', borderRadius: '15px', overflow: 'hidden', border: '2px solid rgba(212,175,55,0.4)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56987.9877977982!2d80.8202707486328!3d26.78426219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c0f69b640d691%3A0x1a19f03d21bcf90f!2sShri%20Anandpur%20Satsang%20Aashram%20(Madhur%20Satsang%20Dham)!5e0!3m2!1sen!2sin!4v1788282861467!5m2!1sen!2sin" 
              width="100%" 
              height="225" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>

          {/* Street View */}
          <div style={{ flex: '1 1 300px', borderRadius: '15px', overflow: 'hidden', border: '2px solid rgba(212,175,55,0.4)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!4v1689264177114!6m8!1m7!1sJAMQDG48jDNRO82Dv8m4ag!2m2!1d26.7843298!2d80.8964091!3f118.85!4f-3.4!5f0.7820865974627469" 
              width="100%" 
              height="225" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </motion.div>

        {/* RSVP Block */}
        <motion.div variants={fadeInUp} style={{ 
          padding: '1.5rem', 
          background: 'rgba(253, 251, 247, 0.9)', 
          borderRadius: '15px', 
          border: '1px solid var(--color-text-accent)', 
          maxWidth: '450px', 
          margin: '0 auto',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div>
            <h4 className="font-serif text-wine" style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: 'var(--color-text-dark)' }}>With Best Compliments From</h4>
            <h3 className="font-serif text-gold" style={{ fontSize: '1.8rem', margin: '0', color: 'var(--color-text-accent)' }}>Sachdev Family</h3>
            <p style={{ fontSize: '0.95rem', lineHeight: '1.4', opacity: 0.9, marginTop: '0.5rem', color: 'var(--color-text-dark)' }}>
              K-1/16, Ansal Nest, Ashiana, Lucknow - 226012
            </p>
          </div>
          
          <div style={{ borderTop: '1px solid rgba(212,175,55,0.3)', paddingTop: '1rem' }}>
            <p style={{ fontSize: '1rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>Contact</p>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, color: 'var(--color-text-dark)' }}>Kamal Sachdev: <strong style={{color: 'var(--color-red-accent)'}}>8052418822</strong></p>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

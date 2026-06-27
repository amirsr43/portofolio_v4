import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaDownload, FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';

import profilePhoto from "../../assets/profile.jpg";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative scattered elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-16 left-10 opacity-40" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.5 9L20 8L15 13L17 20L12 16L7 20L9 13L4 8L10.5 9L12 2Z" fill="#2244cc"/>
        </svg>
        <svg className="absolute top-12 right-16 opacity-30" width="20" height="20" viewBox="0 0 20 20">
          <rect x="8" y="0" width="4" height="20" fill="#cc2244"/>
          <rect x="0" y="8" width="20" height="4" fill="#cc2244"/>
        </svg>
        <svg className="absolute bottom-20 left-8 opacity-40" width="30" height="20" viewBox="0 0 30 20">
          <circle cx="5" cy="10" r="3" fill="#2244cc"/>
          <circle cx="15" cy="10" r="3" fill="#2244cc"/>
          <circle cx="25" cy="10" r="3" fill="#2244cc"/>
        </svg>
        <svg className="absolute top-1/3 right-8 opacity-25" width="22" height="22" viewBox="0 0 22 22">
          <path d="M11 0L12.2 9L21 8L13 12L14 22L11 15L8 22L9 12L1 8L9.8 9Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute top-36 left-1/4 opacity-20" width="120" height="12" viewBox="0 0 120 12">
          <path d="M0 6 Q15 0 30 6 Q45 12 60 6 Q75 0 90 6 Q105 12 120 6" stroke="#cc2244" strokeWidth="2.5" fill="none"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* LEFT COLUMN — Text & Info */}
          <div>
            {/* Big Hello heading */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                  fontWeight: 900,
                  color: '#1a1aff',
                  lineHeight: 1,
                  letterSpacing: '-2px',
                  marginBottom: '0.25rem',
                }}
              >
                Hello!
              </h1>
              {/* Red wavy underline */}
              <svg width="180" height="14" viewBox="0 0 180 14" style={{ marginTop: '-6px' }}>
                <path d="M0 9 Q22 2 45 9 Q67 16 90 9 Q112 2 135 9 Q157 16 180 9"
                  stroke="#dd2244" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </motion.div>

            {/* Bio text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '1rem',
                lineHeight: 1.75,
                color: '#333',
                marginBottom: '1.5rem',
                maxWidth: '480px',
              }}
            >
              It's{' '}
              <strong style={{ fontWeight: 700, color: '#111' }}>Bochi</strong>! A passionate{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 600 }}>Computer Science</em> graduate based in{' '}
              San Francisco. I'm deeply passionate about Web Development, driven by a commitment to{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 600 }}>design innovative, responsive</em> websites that
              provide an interactive and comfortable user experience. I continuously develop{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 600 }}>end-to-end technical solutions</em> combining
              modern technologies with best practices.
            </motion.p>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                marginBottom: '1.5rem',
                maxWidth: '480px',
                border: '2px solid #e0ddd8',
              }}
            >
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: '#1a1aff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <FaGraduationCap size={16} color="#fff" />
                </div>
                <div>
                  <p style={{ fontSize: '0.75rem', color: '#888', fontWeight: 600, marginBottom: '2px', fontFamily: "'DM Sans', sans-serif" }}>
                    2019 – 2023
                  </p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#111', fontFamily: "'DM Sans', sans-serif", lineHeight: 1.4 }}>
                    Bachelor of Science in Computer Science
                  </p>
                  <p style={{ fontSize: '0.8rem', color: '#555', fontFamily: "'DM Sans', sans-serif" }}>
                    University of California, Berkeley
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact info links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.75rem' }}
            >
              {[
                { icon: FaMapMarkerAlt, text: 'Indonesia' },
                { icon: FaPhone, text: '+62 123-4567-8901' },
                { icon: FaEnvelope, text: 'bochi@gmail.com' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <item.icon size={14} color="#888" />
                  <span style={{ fontSize: '0.875rem', color: '#444', fontFamily: "'DM Sans', sans-serif" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Download CV button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              {/* Arrow decoration */}
              <svg width="50" height="36" viewBox="0 0 50 36" fill="none" style={{ opacity: 0.7 }}>
                <path d="M2 6 Q12 2 8 18 Q4 30 22 34" stroke="#dd2244" strokeWidth="2" fill="none" strokeLinecap="round"/>
                <path d="M18 30 L22 34 L26 30" stroke="#dd2244" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a
                href="/CV_Bochi.pdf"
                download
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#aaee00',
                  color: '#111',
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  padding: '0.65rem 1.5rem',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  boxShadow: '2px 2px 0px #888',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translate(-2px,-2px)';
                  e.currentTarget.style.boxShadow = '4px 4px 0px #555';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translate(0,0)';
                  e.currentTarget.style.boxShadow = '2px 2px 0px #888';
                }}
              >
                <FaDownload size={14} />
                Download CV
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — Photo Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {/* Shadow offset card */}
              <div style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                width: '100%',
                height: '100%',
                background: '#1a1aff',
                borderRadius: '20px',
              }} />

              {/* Main photo card */}
              <div style={{
                position: 'relative',
                background: '#fff',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '2.5px solid #111',
                width: '280px',
              }}>
                {/* Photo area */}
                <div style={{
                  width: '280px',
                  height: '320px',
                  background: 'linear-gradient(135deg, #c8d8f0 0%, #e8dff8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                }}>
                  <img
                    src={profilePhoto}
                    alt="Bochi"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                    }}
                  />
                </div>

                {/* Info section */}
                <div style={{ padding: '1rem 1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: '#111',
                      margin: 0,
                    }}>
                      Bochi
                    </p>
                    <span style={{
                      background: '#f0ede8',
                      color: '#888',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: '20px',
                      fontFamily: "'DM Sans', sans-serif",
                    }}>
                      He/him
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FaMapMarkerAlt size={11} color="#888" />
                      <span style={{ fontSize: '0.78rem', color: '#555', fontFamily: "'DM Sans', sans-serif" }}>Indonesia</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FaInstagram size={11} color="#888" />
                      <span style={{ fontSize: '0.78rem', color: '#555', fontFamily: "'DM Sans', sans-serif" }}>@bochi.dev</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FaEnvelope size={11} color="#888" />
                      <span style={{ fontSize: '0.78rem', color: '#555', fontFamily: "'DM Sans', sans-serif" }}>bochi@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div style={{
                position: 'absolute',
                bottom: '-16px',
                right: '-20px',
                background: '#aaee00',
                border: '2.5px solid #111',
                borderRadius: '50px',
                padding: '6px 14px',
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 800,
                fontSize: '0.7rem',
                color: '#111',
                whiteSpace: 'nowrap',
                boxShadow: '2px 2px 0 #333',
                zIndex: 20,
              }}>
                Full-Stack Web Developer ✦
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Google Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default About;
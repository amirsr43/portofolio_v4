import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaLaravel, FaJs, FaCss3Alt, FaHtml5,
  FaFigma, FaGitAlt, FaBootstrap, FaPhp, FaDocker,
  FaAws, FaServer
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMysql, SiJenkins, SiGithubactions, 
  SiGitlab, SiTerraform, SiKubernetes
} from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    // Frontend
    { name: "React.js",      icon: FaReact,      color: "#0099cc", bg: "#e0f4fb", level: 85 },
    { name: "JavaScript",    icon: FaJs,          color: "#bb8800", bg: "#fdf5d0", level: 85 },
    { name: "Tailwind CSS",  icon: SiTailwindcss, color: "#0088aa", bg: "#d8f4f7", level: 90 },
    { name: "HTML5",         icon: FaHtml5,       color: "#cc4400", bg: "#fde9e0", level: 90 },
    { name: "CSS3",          icon: FaCss3Alt,     color: "#1155bb", bg: "#dce8fa", level: 88 },
    { name: "Bootstrap",     icon: FaBootstrap,   color: "#6633aa", bg: "#ede4f8", level: 85 },
    
    // Backend
    { name: "Laravel",       icon: FaLaravel,     color: "#cc2200", bg: "#fde8e4", level: 80 },
    { name: "PHP",           icon: FaPhp,         color: "#5555aa", bg: "#eeebf8", level: 80 },
    { name: "MySQL",         icon: SiMysql,       color: "#1a55aa", bg: "#ddeaf8", level: 80 },
    
    // CI/CD & DevOps (BARU!)
    { name: "CI/CD",         icon: SiGithubactions, color: "#2088ff", bg: "#e5f0ff", level: 75 },
    { name: "Deployment",    icon: FaServer,      color: "#2c6e2c", bg: "#e5f3e5", level: 75 },
    
    // Tools
    { name: "Figma",         icon: FaFigma,       color: "#cc3300", bg: "#fde6e0", level: 85 },
    { name: "Git",           icon: FaGitAlt,      color: "#cc3300", bg: "#fde8e0", level: 85 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } }
  };

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-14 right-14" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.35 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#1a1aff"/>
        </svg>
        <svg className="absolute top-10 left-20" width="18" height="18" viewBox="0 0 18 18" style={{ opacity: 0.28 }}>
          <rect x="7" y="0" width="4" height="18" fill="#dd2244"/>
          <rect x="0" y="7" width="18" height="4" fill="#dd2244"/>
        </svg>
        <svg className="absolute bottom-16 right-12" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.28 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff"/>
        </svg>
        <svg className="absolute bottom-20 left-10" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute top-1/2 left-4" width="80" height="12" viewBox="0 0 80 12" style={{ opacity: 0.18 }}>
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
            stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 900,
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            letterSpacing: '-1.5px',
            color: '#111',
            lineHeight: 1,
            marginBottom: '0.5rem',
          }}>
            Technical{' '}
            <span style={{ color: '#1a1aff' }}>Skills</span>
          </h2>
          {/* Wavy underline */}
          <svg width="160" height="12" viewBox="0 0 160 12" style={{ display: 'block', margin: '0 auto 0.75rem' }}>
            <path d="M0 7 Q13 1 26 7 Q39 13 52 7 Q65 1 80 7 Q95 13 108 7 Q121 1 134 7 Q147 13 160 7"
              stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#666',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            Technologies and tools I work with to build exceptional digital experiences
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                style={{ position: 'relative' }}
              >
                {/* Offset shadow */}
                <div style={{
                  position: 'absolute',
                  top: '5px', left: '5px',
                  width: '100%', height: '100%',
                  background: '#1a1aff',
                  borderRadius: '16px',
                  opacity: 0.15,
                }} />
                {/* Card */}
                <div style={{
                  position: 'relative',
                  background: '#fff',
                  border: '2px solid #e0ddd8',
                  borderRadius: '16px',
                  padding: '1.25rem 1.5rem',
                  cursor: 'pointer',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                    {/* Icon bubble */}
                    <div style={{
                      width: '52px', height: '52px',
                      borderRadius: '14px',
                      background: skill.bg,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                      border: `1.5px solid ${skill.color}33`,
                    }}>
                      <Icon size={28} color={skill.color} />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 800,
                        fontSize: '1rem',
                        color: '#111',
                        marginBottom: '2px',
                      }}>
                        {skill.name}
                      </h3>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.75rem',
                        color: '#888',
                        fontWeight: 600,
                      }}>
                        Proficiency {skill.level}%
                      </p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div style={{
                    height: '6px',
                    background: '#f0ede8',
                    borderRadius: '50px',
                    overflow: 'hidden',
                    border: '1px solid #e0ddd8',
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.07 }}
                      style={{
                        height: '100%',
                        background: skill.color,
                        borderRadius: '50px',
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Skills;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaBriefcase, FaCalendarAlt, FaLaptopCode,
  FaCode, FaGithub, FaPencilAlt
} from 'react-icons/fa';

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  const experiences = [
    {
      title: "Frontend Developer",
      company: "Stripe Inc.",
      type: "Full-time",
      period: "Mar 2024 – Present",
      description:
        "Building and maintaining high-performance React components for Stripe's merchant dashboard. Collaborated with design and backend teams to deliver pixel-perfect, accessible UI features used by millions of businesses globally.",
      achievements: [
        "Reduced dashboard load time by 38% through code splitting, lazy loading, and memoization strategies across 12+ key pages",
        "Led migration of legacy class components to modern React hooks, reducing codebase complexity by 22%",
      ],
      icon: FaBriefcase,
      accentColor: '#1a1aff',
      accentBg: '#e8e8ff',
      typeBg: '#e8e8ff',
      typeColor: '#1a1aff',
    },
    {
      title: "Full-Stack Developer Intern",
      company: "Vercel",
      type: "Internship",
      period: "Jun 2023 – Feb 2024",
      description:
        "Contributed to internal tooling and developer-facing features using Next.js and Node.js. Worked closely with senior engineers on the deployment pipeline and real-time analytics dashboard.",
      achievements: [
        "Built a real-time deployment status widget using WebSockets, reducing support tickets by 31%",
        "Implemented Playwright E2E test coverage for 8 critical user flows, catching 4 production regressions before release",
      ],
      icon: FaLaptopCode,
      accentColor: '#7c3aed',
      accentBg: '#ede9fe',
      typeBg: '#ede9fe',
      typeColor: '#7c3aed',
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      type: "Freelance",
      period: "Jan 2022 – May 2023",
      description:
        "Designed and developed 15+ custom websites and web applications for clients across e-commerce, hospitality, and education industries. Managed projects end-to-end from requirements gathering to deployment.",
      achievements: [
        "Delivered 15+ projects with 100% client satisfaction rate, achieving a 4.9/5 rating on Upwork",
        "Built a multi-tenant SaaS ordering system for a food chain with 8 branches, processing 500+ daily orders",
      ],
      icon: FaCode,
      accentColor: '#b45309',
      accentBg: '#fef3c7',
      typeBg: '#fef3c7',
      typeColor: '#b45309',
    },
    {
      title: "Junior UI/UX Developer",
      company: "PixelCraft Studio",
      type: "Full-time",
      period: "Aug 2021 – Dec 2021",
      description:
        "Collaborated with senior designers to translate Figma mockups into interactive React components. Focused on creating consistent design system components and improving cross-browser compatibility for client projects.",
      achievements: [
        "Built a reusable component library with 40+ components that reduced UI development time by 45% team-wide",
        "Resolved 60+ cross-browser compatibility bugs, achieving consistent rendering across Chrome, Firefox, and Safari",
      ],
      icon: FaPencilAlt,
      accentColor: '#0284c7',
      accentBg: '#e0f2fe',
      typeBg: '#e0f2fe',
      typeColor: '#0284c7',
    },
    {
      title: "Open Source Contributor",
      company: "GitHub Community",
      type: "Volunteer",
      period: "2020 – Present",
      description:
        "Actively contributing to open-source projects in the React and JavaScript ecosystem. Regularly review pull requests, report and fix bugs, and write documentation to help improve developer experience for the community.",
      achievements: [
        "Contributed to 10+ open-source repositories including UI component libraries with 2k+ total GitHub stars",
        "Authored 3 npm packages with 500+ combined weekly downloads for form validation and animation utilities",
      ],
      icon: FaGithub,
      accentColor: '#15803d',
      accentBg: '#dcfce7',
      typeBg: '#dcfce7',
      typeColor: '#15803d',
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: '#f0ede8' }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-14 right-16" width="22" height="22" viewBox="0 0 22 22" style={{ opacity: 0.3 }}>
          <rect x="9" y="0" width="4" height="22" fill="#dd2244"/>
          <rect x="0" y="9" width="22" height="4" fill="#dd2244"/>
        </svg>
        <svg className="absolute top-20 left-14" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.38 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#1a1aff"/>
        </svg>
        <svg className="absolute bottom-16 right-16" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800"/>
        </svg>
        <svg className="absolute bottom-24 left-8" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.28 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff"/>
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff"/>
        </svg>
        <svg className="absolute top-1/2 right-6" width="80" height="12" viewBox="0 0 80 12" style={{ opacity: 0.18 }}>
          <path d="M0 6 Q10 0 20 6 Q30 12 40 6 Q50 0 60 6 Q70 12 80 6"
            stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
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
            Work{' '}
            <span style={{ color: '#1a1aff' }}>Experience</span>
          </h2>
          <svg width="160" height="12" viewBox="0 0 160 12" style={{ display: 'block', margin: '0 auto 0.75rem' }}>
            <path d="M0 7 Q13 1 26 7 Q39 13 52 7 Q65 1 80 7 Q95 13 108 7 Q121 1 134 7 Q147 13 160 7"
              stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
          </svg>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1rem',
            color: '#666',
            maxWidth: '420px',
            margin: '0 auto',
          }}>
            My professional journey and contributions along the way
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'repeating-linear-gradient(to bottom, #1a1aff 0px, #1a1aff 6px, transparent 6px, transparent 12px)',
            opacity: 0.2,
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                >
                  {/* Timeline dot / icon */}
                  <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '56px', height: '56px',
                      borderRadius: '50%',
                      background: exp.accentColor,
                      border: '3px solid #f0ede8',
                      boxShadow: `0 0 0 2px ${exp.accentColor}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} color="#fff" />
                    </div>
                  </div>

                  {/* Card */}
                  <div style={{ flex: 1, position: 'relative', paddingBottom: '0.5rem' }}>
                    {/* Offset shadow */}
                    <div style={{
                      position: 'absolute',
                      top: '6px', left: '6px',
                      width: '100%', height: '100%',
                      background: exp.accentColor,
                      borderRadius: '18px',
                      opacity: 0.1,
                    }} />

                    <div style={{
                      position: 'relative',
                      background: '#fff',
                      border: '2px solid #e0ddd8',
                      borderRadius: '18px',
                      padding: '1.5rem',
                      borderLeft: `4px solid ${exp.accentColor}`,
                    }}>
                      {/* Header row */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '8px',
                        marginBottom: '0.75rem',
                      }}>
                        <div>
                          <h3 style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 800,
                            fontSize: '1.1rem',
                            color: '#111',
                            marginBottom: '3px',
                          }}>
                            {exp.title}
                          </h3>
                          <p style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700,
                            fontSize: '0.875rem',
                            color: exp.accentColor,
                          }}>
                            {exp.company}
                          </p>
                        </div>

                        {/* Badges */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', justifyContent: 'flex-end' }}>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            background: exp.typeBg,
                            color: exp.typeColor,
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 700, fontSize: '0.7rem',
                            padding: '3px 10px', borderRadius: '50px',
                            border: `1.5px solid ${exp.accentColor}33`,
                          }}>
                            {exp.type}
                          </span>
                          <span style={{
                            display: 'inline-flex', alignItems: 'center', gap: '5px',
                            background: '#f5f4f0',
                            color: '#666',
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 600, fontSize: '0.7rem',
                            padding: '3px 10px', borderRadius: '50px',
                            border: '1.5px solid #e0ddd8',
                          }}>
                            <FaCalendarAlt size={9} />
                            {exp.period}
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div style={{ height: '1.5px', background: '#f0ede8', margin: '0.75rem 0' }} />

                      {/* Description */}
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.875rem',
                        color: '#444',
                        lineHeight: 1.7,
                        marginBottom: '1rem',
                      }}>
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {exp.achievements.map((item, i) => (
                          <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                            <div style={{
                              flexShrink: 0,
                              marginTop: '3px',
                              width: '18px', height: '18px',
                              borderRadius: '50%',
                              background: exp.accentBg,
                              border: `1.5px solid ${exp.accentColor}66`,
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>
                              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: exp.accentColor }} />
                            </div>
                            <p style={{
                              fontFamily: "'DM Sans', sans-serif",
                              fontSize: '0.825rem',
                              color: '#555',
                              lineHeight: 1.65,
                            }}>
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Experience;
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaExternalLinkAlt } from "react-icons/fa";
const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "ShopFlow",
      description:
        "A full-featured e-commerce dashboard built with React and Node.js. Includes real-time inventory management, sales analytics with Chart.js, and Stripe payment integration. Handles 10k+ products across multiple storefronts.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "Chart.js"],
      showLive: true,
      accent: "#1a1aff",
      accentBg: "#e8e8ff",
    },
    {
      title: "TaskMate",
      description:
        "A cross-platform productivity app built with React Native. Features drag-and-drop task boards, team collaboration, push notifications, and Google Calendar sync. Available on iOS and Android.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
      tech: ["React Native", "Firebase", "Expo", "Redux"],
      showLive: true,
      accent: "#7c3aed",
      accentBg: "#ede9fe",
    },
    {
      title: "Savoria",
      description:
        "A premium restaurant web experience featuring an animated menu, online reservation system with real-time table availability, and a custom CMS for the restaurant owner to manage dishes and events.",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
      tech: ["Next.js", "Tailwind CSS", "Laravel", "MySQL"],
      showLive: true,
      accent: "#b45309",
      accentBg: "#fef3c7",
    },
    {
      title: "EduLearn",
      description:
        "An online learning platform with video streaming, quizzes, progress tracking, and certificate generation. Supports 500+ courses across 20 categories. Built with a microservices architecture for scalability.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      tech: ["React", "Django", "AWS S3", "Redis", "Docker"],
      showLive: true,
      accent: "#0284c7",
      accentBg: "#e0f2fe",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
      style={{ background: "#f0ede8" }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute top-12 left-16" width="22" height="22" viewBox="0 0 22 22" style={{ opacity: 0.3 }}>
          <rect x="9" y="0" width="4" height="22" fill="#dd2244" />
          <rect x="0" y="9" width="22" height="4" fill="#dd2244" />
        </svg>
        <svg className="absolute top-16 right-20" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.38 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#1a1aff" />
        </svg>
        <svg className="absolute bottom-16 left-10" width="24" height="24" viewBox="0 0 24 24" style={{ opacity: 0.25 }}>
          <path d="M12 1L14 9.5L22.5 8L16 13L18.5 22L12 17L5.5 22L8 13L1.5 8L10 9.5Z" fill="#cc8800" />
        </svg>
        <svg className="absolute bottom-20 right-8" width="14" height="42" viewBox="0 0 14 42" style={{ opacity: 0.28 }}>
          <circle cx="7" cy="7" r="3.5" fill="#1a1aff" />
          <circle cx="7" cy="21" r="3.5" fill="#1a1aff" />
          <circle cx="7" cy="35" r="3.5" fill="#1a1aff" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            letterSpacing: "-1.5px",
            color: "#111",
            lineHeight: 1,
            marginBottom: "0.5rem",
          }}>
            Featured <span style={{ color: "#1a1aff" }}>Projects</span>
          </h2>
          <svg width="160" height="12" viewBox="0 0 160 12" style={{ display: "block", margin: "0 auto 0.75rem" }}>
            <path
              d="M0 7 Q13 1 26 7 Q39 13 52 7 Q65 1 80 7 Q95 13 108 7 Q121 1 134 7 Q147 13 160 7"
              stroke="#dd2244" strokeWidth="2.5" fill="none" strokeLinecap="round"
            />
          </svg>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1rem",
            color: "#666",
            maxWidth: "480px",
            margin: "0 auto",
          }}>
            Some of my best work showcasing my skills and expertise
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 300 } }}
              style={{ position: "relative", height: "100%" }}
            >
              {/* Offset shadow */}
              <div style={{
                position: "absolute",
                top: "6px", left: "6px",
                width: "100%", height: "100%",
                background: project.accent,
                borderRadius: "18px",
                opacity: 0.18,
              }} />

              {/* Card */}
              <div style={{
                position: "relative",
                background: "#fff",
                border: "2px solid #e0ddd8",
                borderRadius: "18px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}>
                {/* Image */}
                <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  />
                  {/* Accent top bar */}
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0,
                    height: "4px", background: project.accent,
                  }} />
                  {/* Action buttons overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    style={{
                      position: "absolute", inset: 0,
                      background: "rgba(0,0,0,0.45)",
                      display: "flex", alignItems: "center", justifyContent: "center", gap: "12px",
                    }}
                  >
                    {project.showLive && (
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          background: "#fff",
                          padding: "8px 16px",
                          borderRadius: "40px",
                          display: "flex", alignItems: "center", gap: "8px",
                          fontSize: "0.8rem", fontWeight: 600,
                          color: project.accent,
                          cursor: "default",
                        }}
                      >
                        <FaExternalLinkAlt size={12} /> Live
                      </motion.div>
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <h3 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 800, fontSize: "1.1rem",
                    color: "#111", marginBottom: "8px",
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem", color: "#666",
                    lineHeight: 1.6, flex: 1, marginBottom: "14px",
                  }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} style={{
                        background: project.accentBg,
                        color: project.accent,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 700, fontSize: "0.7rem",
                        padding: "3px 10px", borderRadius: "50px",
                        border: `1.5px solid ${project.accent}33`,
                      }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@900&family=DM+Sans:wght@400;600;700;800&display=swap');
      `}</style>
    </section>
  );
};

export default Projects;
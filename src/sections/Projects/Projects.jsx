import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Bugtracker",
    desc: "A full-stack bug management application with ticket CRUD, tracking dashboard, and authentication system.",
    stack: ["React", "PHP", "Firebase"],
    links: [
      { label: "Live Demo", url: "https://guinildo.alwaysdata.net/login_page.php" },
      { label: "GitHub", url: "https://github.com/guinildoob755-sudo/bugtracker_projet" },
    ],
  },
  {
    number: "02",
    title: "TransRail",
    desc: "Client dashboard for real-time management and tracking, built independently during internship at ZYA Agency.",
    stack: ["React Native", "Flutter", "Laravel", "PHP"],
    links: [
      { label: "GitHub", url: "https://github.com/guinildoob755-sudo" },
    ],
  },
  {
    number: "03",
    title: "LocalStreet Art",
    desc: "A platform to discover and share local street art, combining my passion for art with development.",
    stack: ["React", "Firebase"],
    links: [
      { label: "GitHub", url: "https://github.com/guinildoob755-sudo/local_street_art_GO" },
    ],
  },
  {
    number: "04",
    title: "PromptWallet",
    desc: "A collaborative desktop product prototype — prompt management tool built with Electron and Vite.",
    stack: ["Electron", "Vite", "React"],
    links: [
      { label: "GitHub", url: "https://github.com/Ali223406/prompt-wallet-electron-vite" },
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="Projects"
      className="min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-r from-[#171717] to-[#3a1f00]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl w-full"
      >
        {/* Label */}
        <motion.div className="font-mono text-xs tracking-[0.25em] text-[#FF8C00] uppercase mb-3 text-center">
          // 03 — Projects
        </motion.div>

        <h2 className="text-4xl md:text-5xl text-[#F5F5F5] mb-14 tracking-tight text-center">
          What I've built
        </h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="
                text-left overflow-hidden
                bg-[#171717]
                border border-[#FF8C00]/30
                hover:border-[#FFD000]
                transition-colors duration-300
              "
            >
              {/* Thumbnail */}
              <div
                className="
                  h-44 flex items-center justify-center text-5xl
                  bg-gradient-to-br from-[#FF8C00]/10 to-transparent
                  border-b border-[#FF8C00]/20
                "
              >
              
              </div>

              <div className="p-6">
                <div className="font-mono text-[0.65rem] tracking-[0.2em] text-[#FF8C00] mb-2 uppercase">
                  // Project_{project.number}
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F5] mb-2 tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm text-[#A8A8A8] leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        font-mono text-[0.65rem] tracking-wide
                        px-2.5 py-1
                        bg-[#FF8C00]/10 border border-[#FF8C00]/25
                        text-[#FF8C00]
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        font-mono text-xs tracking-wide uppercase
                        text-[#A8A8A8]
                        hover:text-[#FF8C00]
                        transition-colors duration-200
                        flex items-center gap-1
                      "
                    >
                      {link.label} →
                    </a>
                  ))}

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
<div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />

      </motion.div>
    </section>
  );
}
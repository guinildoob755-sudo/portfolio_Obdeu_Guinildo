import { motion } from "framer-motion";

const skillGroups = [
  { title: "FRONT-END", skills: ["HTML", "CSS", "JavaScript", "React"] },
  { title: "BACK-END", skills: ["PHP", "Firebase"] },
  { title: "OTHER SKILLS", skills: ["GitHub", "Figma", "Photoshop", "C", "Electron"] },
];

export default function Skills() {
  return (
    <section
      id="Skills"
      className="min-h-screen flex items-center justify-center px-8 py-20 bg-[#0B0B0B]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        {/* Label */}
        <motion.div className="font-mono text-xs tracking-[0.25em] text-[#FF8C00] uppercase mb-3">
          // 02 — Skills
        </motion.div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#F5F5F5] mb-14 tracking-tight">
          What I work with
        </h2>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="
                relative overflow-hidden text-left
                bg-[#171717] border border-[#FF8C00]/30
                p-6
                hover:border-[#FF8C00]
                transition-colors duration-300
              "
            >
              {/* Left accent bar, comme .stat-card / .skill-category */}
              <span className="absolute top-0 left-0 w-[3px] h-full bg-[#FF8C00]" />

              <h3 className="font-mono text-xs tracking-[0.15em] text-[#FF8C00] uppercase mb-5">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      font-mono text-[0.72rem] tracking-wide
                      px-3.5 py-1.5
                      bg-[#171717] border border-[#FF8C00]/30
                      text-[#F5F5F5]
                      hover:border-[#FF8C00] hover:text-[#FF8C00]
                      transition-colors duration-200
                      cursor-default
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
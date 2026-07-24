import { motion } from "framer-motion";

const experiences = [
  {
    role: "Stagiaire Développeur Web",
    company: "ZYA",
    period: "2026",
    description: "Développement d'interfaces web avec React et intégration de fonctionnalités back-end.",
  },
  {
    role: "Projet TransRail",
    company: "Projet personnel",
    period: "2024 — 2025",
    description: "Conception d'une application de gestion ferroviaire, du back-end à l'interface utilisateur.",
  },
  {
    role: "Formation Développement Web",
    company: "Ton école / organisme",
    period: "2023 — présent",
    description: "Apprentissage du développement front-end et back-end : JavaScript, PHP, React, bases de données.",
  },
];




export default function About() {
  return (
    <section
      id="About"
      className="min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-r from-[#171717] to-[#3a1f00]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        {/* Label */}
        <motion.div className="font-mono text-xs tracking-[0.25em] text-[#FF8C00] uppercase mb-3">
          // 01 — About
        </motion.div>

        <h2 className="text-4xl md:text-5xl text-[#F5F5F5] mb-14 tracking-tight">
          Who I am
        </h2>

        <p className="text-[#F5F5F5] text-lg leading-relaxed mb-8">
          Web & Mobile development student, I combine technical skills with
          artistic creativity to build impactful digital experiences. Currently
          in my 2nd year Bachelor's in Web & Mobile Development at École
          Multimédia, I'm looking for a work-study contract starting
          September 2026.
        </p>

        <p className="text-[#F5F5F5] text-lg leading-relaxed mb-8">
          During my internship at ZYA Agency, I worked autonomously on
          TransRail, designing and developing a management dashboard and a
          mobile application using React Native, PHP, Flutter and the Laravel
          API — from writing the technical specs to building the UI/UX
          mockups.
        </p>

        <p className="text-[#F5F5F5] text-lg leading-relaxed mb-14">
          Award winner of the regional Mangawa contest and Samsung's #WithMy
          mobile photography competition, I bring the same creative eye to
          interface design as I do to code.
        </p>

        {/* Experience */}


<motion.div
  whileInView={{ opacity: 1, y: -3 }}
  transition={{ duration: 0.6 }}
  className="
    rounded-xl
    relative overflow-hidden
    bg-gradient-to-br from-[#171717] to-[#3a1f00]
    p-6 mb-14
    border border-[#FF8C00]/50
    font-mono
    shadow-md
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-xl
    hover:shadow-[#FF8C00]/20
  "
>
  <span className="absolute top-0 left-0 w-[3px] h-full bg-[#FF8C00]" />

  <motion.div className="font-mono text-xs tracking-[0.25em] text-[#FFCEA6] uppercase mb-3">
    // Experience
  </motion.div>

  <motion.div className="flex flex-col gap-4">
    {experiences.map((exp) => (
      <motion.div
        key={exp.role}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="
          relative overflow-hidden
          border-l-2 border-[#FF8C00]/40
          bg-[#171717] pl-4 py-3 pr-4
          hover:border-[#FFD000]
          transition-colors duration-300
        "
      >
        <div className="flex justify-between items-baseline flex-wrap gap-2">
          <h4 className="text-[#F5F5F5] font-semibold text-sm tracking-wide">
            {exp.role}
          </h4>
          <span className="text-[#FF8C00] text-xs">{exp.period}</span>
        </div>
        <p className="text-[#FFCEA6] text-xs mt-1">{exp.company}</p>
        <p className="text-[#A8A8A8] text-sm mt-2 leading-relaxed">
          {exp.description}
        </p>
      </motion.div>
    ))}
  </motion.div>
</motion.div>

        
       

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />

      </motion.div>
    </section>
  );
}
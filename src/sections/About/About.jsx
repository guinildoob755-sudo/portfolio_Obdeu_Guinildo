import { motion } from "framer-motion";

const skills = [
  "React", "PHP", "Firebase", "JavaScript", "Figma",
  "GitHub", "HTML / CSS", "Photoshop", "Electron",
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

        {/* Skills grid */} 

        <motion.div 
        whileInView={{ opacity: 1, y: -3 }}
         transition={{ duration: 0.6 }}
         className="
        rounded-xl
        relative overflow-hidden
        bg-gradient-to-br from-[#171717] to-[#FF8C00]
        p-6 mb-14
        border border-[#FF8C00]/50
        font-mono
        shadow-md
        transition-all duration-300
        hover:-translate-y-1 
        hover:shadow-
        hover:shadow-[#FF8C00]
"
          >
          <span className="absolute top-0 left-0 w-[3px] h-full bg-[#FF8C00]" />

          <motion.div className="
          font-mono
           text-xs 
           tracking-[0.25em] 
           text-[#FF8C00] 
           uppercase mb-3"
           relative overflow="hidden
           ">
          // Skills

        </motion.div>
        <motion.div className="grid grid-cols-3 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="
                relative overflow-hidden
                border border-[#FF8C00]/30 bg-[#171717]
                py-4 text-[#F5F5F5] font-mono text-sm tracking-wide
                hover:border-[#FFD000]
                transition-colors duration-300
              "
            >
              {skill}
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
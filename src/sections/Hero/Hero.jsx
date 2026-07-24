import { motion } from 'framer-motion'
import { NeonPulse } from '../../components/NeonPulse';
import { Link } from 'react-scroll'

export default function Hero() {
  return (

    <section id="Hero" className='min-h-screen flex items-center justify-center px-8 py-20 bg-gradient-to-r from-[#171717] to-[#3a1f00]'>
      <motion.div className="bg-grid flex flex-col justify-center items-center gap-4 text-center w-full">
        <motion.div className='h-screen flex flex-col justify-center items-center gap-4 text-center'>


          <motion.div className="text-[#FF8C00] font-mono text-xs tracking-[0.15em] uppercase mb-3">
            // AVAILABLE FOR ALTERNANCE - SEPT. 2026
          </motion.div>

          <motion.h1
      className="text-[#F5F5F5] text-4xl md:text-5xl 
      "
      initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
    >
      Guinildo <span className="obdeu text-[#FF8C00]">Obdeu</span>
    </motion.h1>

          

          <NeonPulse preset="gold" fontSize="clamp(1.5rem, 6vw, 2rem)" className='welcome'>
  welcome to my portfolio
</NeonPulse>


          <motion.p className='text-xl text-[#F5F5F5]'
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            I'm a passionate web developer specializing in JavaScript, PHP and React.
          </motion.p>

          <motion.p className='text-lg text-[#F5F5F5] leading-relaxed mb-8 max-w-2xl'
            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            Web & Mobile Developer based in Palaiseau, France.
            I create responsive and user-friendly websites and
            applications using React and Tailwind CSS.
            I build impactful digital experiences that engage
            users and drive results. Let's connect and create
            something amazing together!
          </motion.p>

          {/* CTA buttons */}
          <motion.div className="flex gap-4 flex-wrap justify-center mb-8" /* ... */>
      <Link to="Projects" smooth duration={600} offset={-80}
        className="px-8 py-3 font-mono text-xs tracking-[0.1em] uppercase font-bold bg-[#FF8C00] text-[#0B0B0B] hover:bg-[#FFD000] transition-colors duration-300 cursor-pointer"
      >
        View Projects
      </Link>
      <Link to="Contact" smooth duration={600} offset={-80}
        className="px-8 py-3 font-mono text-xs tracking-[0.1em] uppercase border border-[#FF8C00]/40 text-[#F5F5F5] hover:border-[#FFD000] hover:text-[#FF8C00] transition-colors duration-300 cursor-pointer"
      >
        Get in Touch
      </Link>
    </motion.div>
         

          <motion.div className='text-[#FF8C00] font-mono text-xs tracking-[0.15em] uppercase flex items-center gap-4'
            initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.9 }}>
            <span className="w-10 h-px bg-[#FF8C00]/50" />
            Scroll to explore
          </motion.div>

        </motion.div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#FF8C00]/40 to-transparent" />

      </motion.div>

    </section>

  )
}
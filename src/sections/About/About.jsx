import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="About" className="min-h-screen flex items-center justify-center px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >

        <motion.div className="div text-[#eddd53]">
          // 01 - ABOUT
        </motion.div>

        <h2 className="text-4xl font-bold text-[#FDBB2D] mb-6 tracking-widest">
          WHO I AM
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Web & Mobile development student, I combine technical skills and artistic 
          creativity to build impactful digital experiences. Award winner in several 
          competitions, I am looking for a work-study contract starting September 2026.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Web & Mobile development student, I combine technical skills and artistic 
          creativity to build impactful digital experiences. Award winner in several 
          competitions, I am looking for a work-study contract starting September 2026.
        </p>

        <p className="text-gray-300 text-lg leading-relaxed mb-8">
          Web & Mobile development student, I combine technical skills and artistic 
          creativity to build impactful digital experiences. Award winner in several 
          competitions, I am looking for a work-study contract starting September 2026.
        </p>

        <motion.div className="div">
            <motion.div className="div">
                
            

            </motion.div>
        </motion.div>



        {/* Skills */}
       
            

       
      </motion.div>
      <div className='ligne'>.</div>
    </section>
  )
}
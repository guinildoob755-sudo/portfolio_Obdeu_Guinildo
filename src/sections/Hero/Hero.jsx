import {motion} from 'framer-motion'

export default function Hero() {
  return (

    <section id="Hero" className='min-h-screen flex items-center justify-center px-8 py-10'>
    <motion.div className=" bg-grid ">
      <motion.div className='h-screen flex flex-col justify-center items-center gap-4 text-center'>

        <motion className="div text-[#eddd53]">
          // AVAILABLE FOR ALTERNANCE - SEPT. 2026
        </motion>

        <motion.h1 className='text-[#ffffff] text-2xl font-bold' initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}} >
        Guinildo <span className='obdeu'>Obdeu</span>
        </motion.h1>  

        <motion.h2 className='text-5xl font-bold text-[#ffffff] '
         initial={{opacity: 0, y: -50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5}}>   
          welcome to my portfolio
        </motion.h2>

        <motion.p className='text-xl text-[#ffffff]'
         initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.3}}>    
            I'm a passionate web developer specializing in React and Tailwind CSS.
        </motion.p>

        <motion.p className='text-lg text-[#ffffff] leading-relaxed mb-8'
         initial={{opacity: 0, y: 50}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, delay: 0.6}}>
          Web & Mobile Developer based in Palaiseau, France.
           I create responsive and user-friendly websites and
            applications using React and Tailwind CSS.
           I build impactful digital experiences that engage
            users and drive results. Let's connect and create 
            something amazing together!
        </motion.p>

        <motion className='div text-[#eddd53] flex' 
        initial={{opacity: 0, y: 60}} animate={{opacity: 1, y: 0}} transition={{duration: 0.3, delay: 0.9}}>
          // Scroll to explore
        </motion>
        

  

    </motion.div>
    <div className='ligne'>.</div>
    
    </motion.div>
    

    
    
    </section>
    
  )
}

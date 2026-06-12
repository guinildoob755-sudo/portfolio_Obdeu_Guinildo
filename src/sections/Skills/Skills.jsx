import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="py-12">
      {/* Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {['React', 'PHP', 'Firebase', 'Figma', 'JavaScript', 'GitHub', 'React Native'].map(skill => (
          <div key={skill} className="
            border border-[#FDBB2D]/30 
            text-[#FDBB2D] 
            rounded-lg py-2 px-4
            hover:bg-[#FDBB2D]/10
            transition-colors duration-300
          ">
            {skill}
          </div>
        ))}
      </div>

      {/* Languages */}
    </section>
  )
}
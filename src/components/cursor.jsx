import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export default function Cursor() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const ringX = useSpring(x, { stiffness: 150, damping: 15 })
  const ringY = useSpring(y, { stiffness: 150, damping: 15 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <motion.div className="fixed pointer-events-none z-[9999] w-2.5 h-2.5 bg-[#FDBB2D] rounded-full -translate-x-1/2 -translate-y-1/2"
        style={{ x, y }} />
      <motion.div className="fixed pointer-events-none z-[9998] w-9 h-9 border border-[#FDBB2D] rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"
        style={{ x: ringX, y: ringY }} />
    </>
  )
}
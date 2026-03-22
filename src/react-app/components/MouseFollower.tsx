import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MouseFollower() {
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring animations for smooth cursor movement
  const springXMain = useSpring(mouseX, { stiffness: 500, damping: 30 })
  const springYMain = useSpring(mouseY, { stiffness: 500, damping: 30 })
  
  const springXTrail = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const springYTrail = useSpring(mouseY, { stiffness: 150, damping: 20 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const hideFollower = () => setIsVisible(false)

    window.addEventListener('mousemove', updateMousePosition, { passive: true })
    window.addEventListener('mouseleave', hideFollower, { passive: true })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mouseleave', hideFollower)
    }
  }, [isVisible, mouseX, mouseY])

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-amber-500/30 rounded-full pointer-events-none z-50 mix-blend-difference will-change-transform"
        style={{
          x: springXMain,
          y: springYMain,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
      />
      
      {/* Trail cursor */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 border border-amber-400/50 rounded-full pointer-events-none z-40 will-change-transform"
        style={{
          x: springXTrail,
          y: springYTrail,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  )
}

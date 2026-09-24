import { useEffect, useRef } from 'react'
import { useInView, useAnimation } from 'framer-motion'

/**
 * Triggers framer-motion entrance animation when element scrolls into view.
 * Usage:
 *   const { ref, controls } = useScrollReveal()
 *   <motion.div ref={ref} animate={controls} initial="hidden" variants={fadeUp} />
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [inView, controls])

  return { ref, controls }
}

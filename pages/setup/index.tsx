import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import { tools } from '../../constants'
import Carousel from '../../components/Carousel'

export default function Setup() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength="1"
          className="indicator"
          style={{ pathLength: scrollXProgress }}
        />
      </svg>
      <p className="text-2xl mx-60">
        By now, you got a high-performance device enough to satisfy all the
        technical requirements the project demands. Below the list of software
        you need to install:
      </p>
      <Carousel ref={ref} list={tools} linkName={'Download'} />
    </div>
  )
}

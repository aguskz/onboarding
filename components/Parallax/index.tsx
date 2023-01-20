import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from 'framer-motion'

import { repos } from '../../constants'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Section({
  key,
  name,
  image,
  title,
  subtitle,
  link,
}: {
  key: number
  name?: string
  image?: string
  title?: string
  subtitle?: string
  link?: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section key={key}>
      {image ? (
        <section className="w-6/12 justify-start">
          <div ref={ref} className="bg-black flex">
            <img ref={ref} src={image} className="w-auto h-auto" />
          </div>
          <motion.h2 style={{ y }} className="-mt-20 flex flex-col -mx-20">
            {name}
            <p className="tracking-normal mb-2 mt-2 font-bold text-2xl max-w-md">
              {title}
            </p>
            <p className="tracking-normal max-w-md">{subtitle}</p>
            <div className="flex">
              <a
                className="flex rounded-md bg-yellow-300 font-mono text-lg px-2"
                target="_blank"
                href={link}
              >
                <p className="text-black m-0 p-1 tracking-normal">GitLab</p>
              </a>
            </div>
          </motion.h2>
        </section>
      ) : title ? (
        <motion.h1 className="text-white">{title}</motion.h1>
      ) : (
        <motion.p className="text-2xl mx-20">{subtitle}</motion.p>
      )}
    </section>
  )
}

export default function Parallax() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      {repos.map(({ key, name, image, title, subtitle, link }) => (
        <Section
          key={key}
          name={name}
          image={image}
          title={title}
          subtitle={subtitle}
          link={link}
        />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  )
}

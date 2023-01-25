import { motion, useScroll, useSpring } from 'framer-motion'

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
  return (
    <section key={key} className="bg-white dark:bg-black">
      {image ? (
        <section className="w-6/12 justify-start">
          <div className="bg-white dark:bg-black flex">
            <img src={image} className="w-auto h-auto" />
          </div>
          <h2 className="-mt-20 flex flex-col -mx-20 text-black dark:text-white">
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
          </h2>
        </section>
      ) : title ? (
        <motion.h1 className="text-black dark:text-white">{title}</motion.h1>
      ) : (
        <motion.p className="text-2xl mx-20 text-black dark:text-white">
          {subtitle}
        </motion.p>
      )}
    </section>
  )
}

type Repo = {
  key: number
  name?: string
  image?: string
  title?: string
  subtitle?: string
  link?: string
}

export default function Parallax({ repos }: { repos: Repo[] }) {
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
      <motion.div
        className="progress bg-black dark:bg-white"
        style={{ scaleX }}
      />
    </>
  )
}

import { motion, useScroll, useSpring } from 'framer-motion'
import { Repo } from '../../types'

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
        <section className="w-full justify-center">
          <div className="bg-white dark:bg-black flex mr-20">
            <img src={image} className="w-auto h-auto" />
          </div>
          <h2 className="-mt-20 flex flex-col text-black dark:text-white">
            {name}
            <p className="tracking-normal mb-2 mt-2 font-bold text-2xl max-w-md">
              {title}
            </p>
            <p className="tracking-normal max-w-md pr-5">{subtitle}</p>
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
        <div className="bg-white dark:bg-black w-full">
          <motion.h1 className="text-black dark:text-white">{title}</motion.h1>
        </div>
      ) : (
        <motion.p className="text-2xl mx-20 text-black dark:text-white">
          {subtitle}
        </motion.p>
      )}
    </section>
  )
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
      {repos.map(({ id, name, avatar_url, title, description, web_url }) => (
        <Section
          key={id}
          name={name}
          image={avatar_url}
          title={title}
          subtitle={description}
          link={web_url}
        />
      ))}
      <motion.div
        className="progress bg-black dark:bg-white"
        style={{ scaleX }}
      />
    </>
  )
}

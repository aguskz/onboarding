import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'

export default function Carousel({
  list,
  linkName,
  circle = false,
}: {
  list: Array<{ name: string; link?: string }>
  linkName: string
  circle?: boolean
}) {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  return (
    <>
      {circle && (
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
      )}
      <ul className="w-8/12 max-h-80" ref={ref}>
        {list.map(({ name, link }: { name: string; link?: string }) => (
          <li className="flex flex-col justify-between rounded-md  hover:border-yellow-300 focus:border-yellow-300 bg-zinc-900">
            <div>
              <p className="text-white text-xl p-3 text-opacity-60">{name}</p>
            </div>
            {link ? (
              <div className="flex justify-end">
                <a
                  className="flex rounded-md bg-yellow-300 font-mono text-lg px-2 mb-2 mr-2"
                  target="_blank"
                  href={link}
                >
                  <p className="text-black m-0 p-1 tracking-normal">
                    {linkName}
                  </p>
                </a>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </>
  )
}

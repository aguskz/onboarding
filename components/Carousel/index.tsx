import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Image from 'next/image'

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
      <ul className="w-8/12 max-h-64" ref={ref}>
        {list.map(
          ({
            name,
            link,
            icon,
          }: {
            name: string
            link?: string
            icon?: string
          }) => (
            <li className="flex flex-col rounded-md bg-zinc-900 justify-between">
              <div className="flex flex-col">
                <p className="text-white text-xl p-3 text-opacity-60 mb-0">
                  {name}
                </p>
                {icon ? (
                  <div className="mt-0">
                    <Image
                      src={icon}
                      className="relative max-h-12 w-auto h-auto pl-5"
                      width={50}
                      height={50}
                      alt="test"
                    />
                  </div>
                ) : null}
              </div>
              <div className="flex justify-end pr-2 pb-2">
                {link ? (
                  <a
                    className="flex rounded-md bg-yellow-300 font-mono text-lg px-2 mb-2 mr-2"
                    target="_blank"
                    href={link}
                  >
                    <p className="text-black m-0 p-1 tracking-normal">
                      {linkName}
                    </p>
                  </a>
                ) : null}
              </div>
            </li>
          ),
        )}
      </ul>
    </>
  )
}

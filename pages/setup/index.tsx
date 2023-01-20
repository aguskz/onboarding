import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Head from 'next/head'
import { tools } from '../../constants'

export default function Setup() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <ul ref={ref} className="w-8/12 max-h-80">
        {tools.map(({ name, link }) => (
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
                  <p className="text-black m-0 p-1 tracking-normal">Download</p>
                </a>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  )
}

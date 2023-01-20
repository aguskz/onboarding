import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import Head from 'next/head'
import { access, additionalAccess } from '../../constants'

export default function Setup() {
  const ref = useRef(null)
  const { scrollXProgress } = useScroll({ container: ref })
  const text = 'test'
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p className="text-2xl mx-60">
        All the documentation related to the project is consolidaded inside
        Notion. Please, consider Notion as the source of truth for requirements,
        technical specifications, wireframes, shared documents and more.
      </p>
      <ul ref={ref} className="w-8/12 max-h-80">
        {access.map(({ name, link }) => (
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
                  <p className="text-black m-0 p-1 tracking-normal">See more</p>
                </a>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="text-2xl text-white mx-60 mt-10">
        We are more than happy to request access on your behalf and we normally
        do it in that way. But just in case, if access is not granted, please
        let us know. We will connect with the client right away.
      </p>
      <div ref={ref} className="flex w-8/12 justify-between gap-5">
        {additionalAccess.map(({ name, link, linkName }) => (
          <div className="flex flex-col justify-between rounded-md  hover:border-yellow-300 focus:border-yellow-300 bg-zinc-900">
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
          </div>
        ))}
      </div>
    </div>
  )
}

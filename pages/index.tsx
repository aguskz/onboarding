import type { NextPage } from 'next'
import * as React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
        }}
      >
        <img
          src="reframe.svg"
          className="relative max-h-12 w-auto h-auto pl-5"
        />
        <img
          src="kaizen.png"
          className="relative max-h-20 w-auto h-auto pl-10"
        />
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-10">Welcome partner!</h1>
        <p className="text-2xl">
          The whole crew is happy to have you on board!
        </p>
        <motion.div
          className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="/setup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
            variants={item}
          >
            <h3 className="text-2xl font-bold">
              Installation and Setup &rarr;
            </h3>
            <p className="mt-4 text-xl">
              The list of software you need to install.
            </p>
          </motion.a>

          <motion.a
            href="/access"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
            variants={item}
          >
            <h3 className="text-2xl font-bold">Additional access &rarr;</h3>
            <p className="mt-4 text-xl">
              All the documentation related to the project is consolidaded
              inside Notion.
            </p>
          </motion.a>

          <motion.a
            href="/repos"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
            variants={item}
          >
            <h3 className="text-2xl font-bold">Repositories &rarr;</h3>
            <p className="mt-4 text-xl">
              Apps currently under construction that conform the whole project.
            </p>
          </motion.a>

          <motion.a
            href="/diagram.png"
            download
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
            variants={item}
          >
            <h3 className="text-2xl font-bold">Overview &rarr;</h3>
            <p className="mt-4 text-xl">
              Diagram that outlines microservices and how they are related.
            </p>
          </motion.a>
        </motion.div>
      </main>
    </div>
  )
}

export default Home

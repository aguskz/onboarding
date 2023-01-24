import type { NextPage } from 'next'
import * as React from 'react'
import { motion } from 'framer-motion'

import { ToggleDarkMode } from '../components'

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
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-black">
      <div className="flex w-full justify-between items-center bg-black dark:bg-transparent">
        <img
          src="kaizen.png"
          className="relative max-h-20 w-auto h-auto pl-10"
        />
        <ToggleDarkMode />
        <img
          src="reframe.svg"
          className="relative max-h-12 w-auto h-auto pr-10"
        />
      </div>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-10 mt-20 text-black dark:text-white">
          Welcome partner!
        </h1>
        <p className="text-2xl text-black dark:text-white">
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
            className="border-black dark:border-white mt-6 w-96 rounded-xl border-2 p-6 text-left hover:border-blue-500 focus:border-blue-500 text-black dark:text-white dark:hover:border-yellow-300 dark:focus:border-yellow-300"
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
            className="border-black dark:border-white mt-6 w-96 rounded-xl border-2 p-6 text-left hover:border-blue-500 focus:border-blue-500 text-black dark:text-white dark:hover:border-yellow-300 dark:focus:border-yellow-300"
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
            className="border-black dark:border-white mt-6 w-96 rounded-xl border-2 p-6 text-left hover:border-blue-500 focus:border-blue-500 text-black dark:text-white dark:hover:border-yellow-300 dark:focus:border-yellow-300"
            variants={item}
          >
            <h3 className="text-2xl font-bold">Repositories &rarr;</h3>
            <p className="mt-4 text-xl">
              Apps currently under construction that conform the whole project.
            </p>
          </motion.a>

          <motion.a
            href="/overview"
            className="border-black dark:border-white mt-6 w-96 rounded-xl border-2 p-6 text-left hover:border-blue-500 focus:border-blue-500 text-black dark:text-white dark:hover:border-yellow-300 dark:focus:border-yellow-300"
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

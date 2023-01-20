import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-10">Welcome partner!</h1>
        <img src="kaizen.png" className="flex max-h-20 w-auto h-auto pl-5" />
        <p className="text-2xl">
          The whole crew is happy to have you on board!
        </p>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/setup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">
              Installation and Setup &rarr;
            </h3>
            <p className="mt-4 text-xl">
              The list of software you need to install.
            </p>
          </a>

          <a
            href="/access"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">Additional access &rarr;</h3>
            <p className="mt-4 text-xl">
              All the documentation related to the project is consolidaded
              inside Notion.
            </p>
          </a>

          <a
            href="/repos"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">Repositories &rarr;</h3>
            <p className="mt-4 text-xl">
              Apps currently under construction that conform the whole project.
            </p>
          </a>

          <a
            href="/diagram.png"
            download
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">Overview &rarr;</h3>
            <p className="mt-4 text-xl">
              Diagram that outlines microservices and how they are related.
            </p>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home

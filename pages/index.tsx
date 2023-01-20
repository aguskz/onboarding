import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold mb-10">
          Welcome partner!
          {/* <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a> */}
        </h1>
        <img src="kaizen.png" className='flex max-h-20 w-auto h-auto pl-5'/>
        <p className="text-2xl">
        The whole crew is happy to have you on board!
          {/* Get started by editing{' '}
          <code className="rounded-md bg-gray-100 p-3 font-mono text-lg">
            pages/index.tsx
          </code> */}
        </p>
        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="/setup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">Installation and Setup &rarr;</h3>
            <p className="mt-4 text-xl">
            The list of software you need to install.
            </p>
          </a>

          <a
            href="/setup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">Additional access &rarr;</h3>
            <p className="mt-4 text-xl">
            All the documentation related to the project is consolidaded inside Notion.
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
            href="/setup"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:border-yellow-300 focus:border-yellow-300"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>

      </main>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer> */}
    </div>
  )
}

export default Home

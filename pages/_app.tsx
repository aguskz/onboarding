import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/Parallax/styles.css'
import '../pages/setup/styles.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kz Reframe Onboarding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../components/Parallax/styles.css'
import '../pages/setup/styles.css'
import Head from 'next/head'
import { ToggleDarkMode } from '../components'
import { useDarkMode } from '../hooks/useDarkMode'

function MyApp({ Component, pageProps }: AppProps) {
  useDarkMode()
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

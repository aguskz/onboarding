import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../components/Parallax/styles.css";
import '../pages/setup/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

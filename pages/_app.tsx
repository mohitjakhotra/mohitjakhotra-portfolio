import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import PageTransition from '../components/PageTransition'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageTransition>
        <Component {...pageProps} />
      </PageTransition>
      <Analytics />
    </>
  )
}

export default MyApp

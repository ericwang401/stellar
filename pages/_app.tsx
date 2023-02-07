import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from '@next/font/google'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

const inter = Inter({ subsets: ['latin'] })

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<main className={inter.className}>
    <Component {...pageProps} />
  </main>)
}

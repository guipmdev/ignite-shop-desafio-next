import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { CartProvider } from 'use-shopping-cart'

import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

const stripeKey = process.env.STRIPE_PUBLIC_KEY as string

globalStyles()

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return (
        <>
          <Header />
          {page}
        </>
      )
    })

  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>{getLayout(<Component {...pageProps} />)}</Container>
    </CartProvider>
  )
}

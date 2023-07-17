import type { AppProps } from 'next/app'
import Image from 'next/image'
import { CartProvider } from 'use-shopping-cart'

import logoImg from '../assets/logo.svg'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'

globalStyles()

const stripeKey = process.env.STRIPE_PUBLIC_KEY!

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}

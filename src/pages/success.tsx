import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ReactElement } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import { Header } from '../components/Header'
import { stripe } from '../lib/stripe'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface Product {
  id: string
  name: string
  image: string
}

interface SuccessProps {
  customerName: string
  products: Product[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const cart = useShoppingCart()
  const { clearCart, cartCount } = cart

  if (cartCount) clearCart()

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <div className="images">
          {products.map((product) => {
            return (
              <ImageContainer key={product.id}>
                <Image src={product.image} width={120} height={110} alt="" />
              </ImageContainer>
            )
          })}
        </div>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{' '}
          {products.length > 1 ? 'camisetas' : 'camiseta'} já está a caminho da
          sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

Success.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Header hideCart />
      {page}
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const products = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}

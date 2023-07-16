import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Stripe from 'stripe'

import Slide from '../components/Slide'
import { stripe } from '../lib/stripe'
import { HomeContainer } from '../styles/pages/home'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

interface HomeProps {
  products: Product[]
}

export default function Home({ products }: HomeProps) {
  const router = useRouter()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1.75,
      spacing: 48,
    },
  })

  const slides = router.isFallback
    ? [1, 2, 3].map((number) => {
        return <Slide key={number} />
      })
    : products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Slide product={product} />
          </Link>
        )
      })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {slides}
      </HomeContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100),
    }
  })

  return {
    props: {
      products,
    },
  }
}

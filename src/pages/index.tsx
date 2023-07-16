import 'keen-slider/keen-slider.min.css'

import axios from 'axios'
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import Slide from '../components/Slide'
import { HomeContainer } from '../styles/pages/home'

const MutationPlugin: KeenSliderPlugin = (slider) => {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      slider.update()
    })
  })
  const config = { childList: true }

  slider.on('created', () => {
    observer.observe(slider.container, config)
  })
  slider.on('destroyed', () => {
    observer.disconnect()
  })
}

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])

  const [sliderRef] = useKeenSlider(
    {
      slides: {
        perView: 1.75,
        spacing: 48,
      },
    },
    [MutationPlugin],
  )

  const slides = isLoading
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

  const readProducts = useCallback(async () => {
    setIsLoading(true)
    const response = await axios.get('/api/products')

    setProducts(response.data)

    setIsLoading(false)
  }, [])

  useEffect(() => {
    readProducts()
  }, [readProducts])

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

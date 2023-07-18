import 'keen-slider/keen-slider.min.css'

import axios from 'axios'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import { Product } from '../components/Product'
import { SliderController } from '../components/SliderController'
import { MutationPlugin } from '../lib/keen-slider'
import { HomeContainer } from '../styles/pages/home'

export interface ProductType {
  id: string
  name: string
  description: string
  image: string
  price_id: string
  price: number
  currency: string
}

export default function Home() {
  const [isReadingProducts, setIsReadingProducts] = useState(true)

  const [products, setProducts] = useState<ProductType[]>([])

  const [totalSlides, setTotalSlides] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)

  const keenSliderOptions: KeenSliderOptions = {
    slides: {
      perView: 1.75,
      spacing: 48,
    },
    initial: 0,

    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel)
    },

    created: (slider) => {
      if (slider.track.details) {
        setTotalSlides(slider.track.details.slides.length)
      }
    },

    updated: (slider) => {
      setTotalSlides(slider.track.details.slides.length)
    },
  }

  const [sliderRef, instanceRef] = useKeenSlider(keenSliderOptions, [
    MutationPlugin,
  ])

  const slides = isReadingProducts
    ? [1, 2, 3].map((number) => {
        return <Product key={number} />
      })
    : products.map((product) => {
        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <Product product={product} />
          </Link>
        )
      })

  const readProducts = useCallback(async () => {
    setIsReadingProducts(true)

    const response = await axios.get('/api/products')
    setProducts(response.data)

    setIsReadingProducts(false)
  }, [])

  useEffect(() => {
    readProducts()
  }, [readProducts])

  function handleSlideChange(action: 'prev' | 'next') {
    instanceRef.current?.[action]()
  }

  const sliderCreated = !!instanceRef.current

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {slides}

        {sliderCreated && (
          <>
            <SliderController
              hidden={currentSlide === totalSlides - 1}
              onClick={() => handleSlideChange('next')}
            />

            <SliderController
              left
              hidden={currentSlide === 0}
              onClick={() => handleSlideChange('prev')}
            />
          </>
        )}
      </HomeContainer>
    </>
  )
}

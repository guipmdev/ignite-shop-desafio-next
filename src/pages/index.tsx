import 'keen-slider/keen-slider.min.css'

import axios from 'axios'
import { KeenSliderOptions, useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import Slide from '../components/Slide'
import SliderController from '../components/SliderController'
import { MutationPlugin } from '../lib/keen-slider'
import { HomeContainer } from '../styles/pages/home'

export interface Product {
  id: string
  name: string
  imageUrl: string
  price: string
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  const [products, setProducts] = useState<Product[]>([])

  const [loaded, setLoaded] = useState(false)
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
        setLoaded(true)
      }
    },

    updated: (slider) => {
      setTotalSlides(slider.track.details.slides.length)
      setLoaded(true)
    },
  }

  const [sliderRef, instanceRef] = useKeenSlider(keenSliderOptions, [
    MutationPlugin,
  ])

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

  function handleSlideChange(action: 'prev' | 'next') {
    instanceRef.current?.[action]()
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {slides}

        {loaded && instanceRef.current && (
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

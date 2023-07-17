import 'keen-slider/keen-slider.min.css'

import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import axios from 'axios'
import { KeenSliderPlugin, useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

import Slide from '../components/Slide'
import { HomeContainer, SliderController } from '../styles/pages/home'

const MutationPlugin: KeenSliderPlugin = (slider) => {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
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
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [totalSlides, setTotalSlides] = useState(0)
  const [products, setProducts] = useState<Product[]>([])

  const [sliderRef, instanceRef] = useKeenSlider(
    {
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

  function handleSlideChange(action: 'prev' | 'next') {
    instanceRef.current?.[action]()
  }

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

        {loaded && instanceRef.current && (
          <>
            <SliderController
              className="right"
              hidden={currentSlide === totalSlides - 1}
            >
              <button onClick={() => handleSlideChange('next')}>
                <CaretRight size={48} />
              </button>
            </SliderController>

            <SliderController className="left" hidden={currentSlide === 0}>
              <button onClick={() => handleSlideChange('prev')}>
                <CaretLeft size={48} />
              </button>
            </SliderController>
          </>
        )}
      </HomeContainer>
    </>
  )
}

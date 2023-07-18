import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MouseEvent } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import { CartDetails } from 'use-shopping-cart/core'

import { MainButton } from '../../components/MainButton'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { currencyFormatter } from '../../utils/formatters'
import { ProductType } from '..'

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const cart = useShoppingCart()
  const { removeItem, addItem } = cart

  const cartDetails = cart.cartDetails || ({} as CartDetails)

  const productAlreadyInCart = Object.keys(cartDetails).includes(product.id)

  function handleModifyItemOnCart(event: MouseEvent<HTMLElement>) {
    event.preventDefault()

    if (productAlreadyInCart) {
      removeItem(product.id)
    } else {
      addItem(product)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.image} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{currencyFormatter.format(product.price / 100)}</span>

          <p>{product.description}</p>

          <MainButton
            onClick={handleModifyItemOnCart}
            removeButton={productAlreadyInCart}
            content={
              productAlreadyInCart ? 'Retirar da sacola' : 'Colocar na sacola'
            }
          />
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params?.id

  if (!productId) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    }
  }

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price_id: price.id,
        price: price.unit_amount,
        currency: price.currency.toUpperCase(),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { MouseEvent } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

import MainButton from '../../components/MainButton'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { ProductType } from '..'

interface ProductProps {
  product: ProductType
}

export default function Product({ product }: ProductProps) {
  const { cartDetails, removeItem, addItem } = useShoppingCart()

  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
  //   useState(false)

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId,
  //     })

  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (err) {
  //     // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

  //     setIsCreatingCheckoutSession(false)

  //     alert('Falha ao redirecionar ao checkout!')
  //   }
  // }

  const productAlreadyInCart =
    !!cartDetails && Object.keys(cartDetails).includes(product.id)

  function handleModifyItemOnCart(event: MouseEvent<HTMLElement>) {
    event.preventDefault()

    if (productAlreadyInCart) {
      removeItem(product!.id)
    } else {
      addItem(product!)
    }
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price! / 100)}
          </span>

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
    paths: [{ params: { id: 'prod_OG86YP8ImnL0mI' } }],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

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
        imageUrl: product.images[0],
        defaultPriceId: price.id,
        price: price.unit_amount,
        currency: price.currency.toUpperCase(),
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}

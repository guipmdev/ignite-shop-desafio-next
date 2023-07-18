import Image from 'next/image'
import { MouseEvent } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartDetails } from 'use-shopping-cart/core'

import { ProductType } from '../../pages'
import { currencyFormatter } from '../../utils/formatters'
import { ShoppingCartButton } from '../ShopppingCartButton'
import { PlaceholderContainer, ProductContainer } from './styles'

interface ProductProps {
  product?: ProductType
}

export function Product({ product }: ProductProps) {
  const cart = useShoppingCart()
  const { removeItem, addItem } = cart

  const cartDetails = cart.cartDetails || ({} as CartDetails)

  const isPlaceholder = !product

  if (isPlaceholder) {
    return (
      <PlaceholderContainer className="keen-slider__slide">
        <div className="image"></div>
        <footer>
          <div className="title"></div>
          <div className="price"></div>
        </footer>
      </PlaceholderContainer>
    )
  }

  const productAlreadyInCart = Object.keys(cartDetails).includes(product.id)

  const handleModifyItemOnCart = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()

    switch (productAlreadyInCart) {
      case true:
        removeItem(product.id)
        break
      case false:
        addItem(product)
        break
    }
  }

  return (
    <ProductContainer className="keen-slider__slide">
      <Image src={product.image} width={520} height={480} alt="" />

      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{currencyFormatter.format(product.price / 100)}</span>
        </div>

        <ShoppingCartButton
          onClick={handleModifyItemOnCart}
          removeButton={productAlreadyInCart}
        />
      </footer>
    </ProductContainer>
  )
}

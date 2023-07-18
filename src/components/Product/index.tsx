import Image from 'next/image'
import { MouseEvent } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

import { ProductType } from '../../pages'
import { currencyFormatter } from '../../utils/formatters'
import ShoppingCartButton from '../ShopppingCartButton'
import { PlaceholderContainer, ProductContainer } from './styles'

interface ProductProps {
  product?: ProductType
}

export default function Product({ product }: ProductProps) {
  const { removeItem, addItem, cartDetails } = useShoppingCart()

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

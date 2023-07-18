import Image from 'next/image'
import { CartActions } from 'use-shopping-cart'
import { CartEntry } from 'use-shopping-cart/core'

import { currencyFormatter } from '../../utils/formatters'
import { CartProductContainer, ImageContainer } from './styles'

interface CartProductProps {
  product: CartEntry
  removeItem: CartActions['removeItem']
}

export default function CartProduct({ product, removeItem }: CartProductProps) {
  function handleRemoveItemFromCart() {
    removeItem(product.id)
  }

  return (
    <CartProductContainer>
      <ImageContainer>
        <Image src={product.image!} alt="" width={95} height={95} />
      </ImageContainer>

      <div className="product-infos">
        <span>{product.name}</span>
        <strong>{currencyFormatter.format(product.price / 100)}</strong>
        <button onClick={handleRemoveItemFromCart}>Remover</button>
      </div>
    </CartProductContainer>
  )
}

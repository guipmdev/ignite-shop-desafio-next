import Image from 'next/image'

import { CartProductContainer, ImageContainer } from './styles'

export default function CartProduct() {
  return (
    <CartProductContainer>
      <ImageContainer>
        <Image src="" alt="" width={95} height={95} />
      </ImageContainer>

      <div className="product-infos">
        <span>Camiseta Beyond the Limits</span>
        <strong>R$ 79,90</strong>
        <button>Remover</button>
      </div>
    </CartProductContainer>
  )
}

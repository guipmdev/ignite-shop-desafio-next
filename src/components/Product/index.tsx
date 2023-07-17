import { Handbag } from '@phosphor-icons/react'
import Image from 'next/image'

import { ProductType } from '../../pages'
import { PlaceholderContainer, ProductContainer } from './styles'

interface ProductProps {
  product?: ProductType
}

export default function Product({ product }: ProductProps) {
  const isPlaceholder = !product

  return isPlaceholder ? (
    <PlaceholderContainer className="keen-slider__slide">
      <div className="image"></div>
      <footer>
        <div className="title"></div>
        <div className="price"></div>
      </footer>
    </PlaceholderContainer>
  ) : (
    <ProductContainer className="keen-slider__slide">
      <Image src={product.imageUrl} width={520} height={480} alt="" />

      <footer>
        <div>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </div>

        <button>
          <Handbag weight="bold" size={32} />
        </button>
      </footer>
    </ProductContainer>
  )
}

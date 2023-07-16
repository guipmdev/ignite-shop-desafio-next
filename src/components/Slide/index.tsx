import Image from 'next/image'

import { Product } from '../../pages'
import { ProductContainer } from './styles'

interface SlideProps {
  product?: Product
}

export default function Slide({ product }: SlideProps) {
  const isPlaceholder = !product

  return (
    <ProductContainer
      className="keen-slider__slide"
      isPlaceholder={isPlaceholder}
    >
      {isPlaceholder ? (
        <>
          <div className="image"></div>
          <footer>
            <div className="title"></div>
            <div className="price"></div>
          </footer>
        </>
      ) : (
        <>
          <Image src={product.imageUrl} width={520} height={480} alt="" />

          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </>
      )}
    </ProductContainer>
  )
}

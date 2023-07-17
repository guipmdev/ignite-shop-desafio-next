import Image from 'next/image'
import Link from 'next/link'
import { useShoppingCart } from 'use-shopping-cart'

import logoImg from '../../assets/logo.svg'
import ShoppingCartButton from '../ShopppingCartButton'
import { HeaderContainer } from './styles'

export default function Header() {
  const { cartCount } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <ShoppingCartButton
        size={24}
        backgroundColor="gray"
        counter={cartCount}
      />
    </HeaderContainer>
  )
}

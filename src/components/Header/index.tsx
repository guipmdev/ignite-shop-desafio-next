import Image from 'next/image'
import Link from 'next/link'

import logoImg from '../../assets/logo.svg'
import ShoppingCartButton from '../ShopppingCartButton'
import { HeaderContainer } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <ShoppingCartButton size={24} backgroundColor="gray" hasCounter />
    </HeaderContainer>
  )
}

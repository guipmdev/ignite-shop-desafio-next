import { Handbag } from '@phosphor-icons/react'

import { ShoppingCartButtonContainer } from './styles'

interface ShoppingCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number
  backgroundColor?: 'gray'
}

export default function ShoppingCartButton({
  size,
  backgroundColor,
  ...rest
}: ShoppingCartButtonProps) {
  return (
    <ShoppingCartButtonContainer backgroundColor={backgroundColor} {...rest}>
      <Handbag weight="bold" size={size || 32} />
    </ShoppingCartButtonContainer>
  )
}

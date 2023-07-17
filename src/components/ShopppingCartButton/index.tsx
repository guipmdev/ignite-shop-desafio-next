import { Handbag } from '@phosphor-icons/react'

import { ShoppingCartButtonContainer } from './styles'

interface ShoppingCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number
  backgroundColor?: 'gray'
  hasCounter?: boolean
}

export default function ShoppingCartButton({
  size,
  backgroundColor,
  hasCounter,
  ...rest
}: ShoppingCartButtonProps) {
  return (
    <ShoppingCartButtonContainer backgroundColor={backgroundColor} {...rest}>
      {hasCounter && <span>1</span>}
      <Handbag weight="bold" size={size || 32} />
    </ShoppingCartButtonContainer>
  )
}

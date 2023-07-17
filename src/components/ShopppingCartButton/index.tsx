import { Handbag } from '@phosphor-icons/react'

import { ShoppingCartButtonContainer } from './styles'

interface ShoppingCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number
  backgroundColor?: 'gray'
  counter?: number
  removeButton?: boolean
}

export default function ShoppingCartButton({
  size,
  backgroundColor,
  counter,
  removeButton,
  ...rest
}: ShoppingCartButtonProps) {
  return (
    <ShoppingCartButtonContainer
      backgroundColor={backgroundColor}
      removeButton={removeButton}
      {...rest}
    >
      {!!counter && <span>{counter}</span>}
      <Handbag weight="bold" size={size || 32} />
    </ShoppingCartButtonContainer>
  )
}

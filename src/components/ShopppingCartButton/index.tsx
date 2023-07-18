import { Handbag } from '@phosphor-icons/react'
import React from 'react'

import { ShoppingCartButtonContainer } from './styles'

interface ShoppingCartButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number
  backgroundColor?: 'gray'
  counter?: number
  removeButton?: boolean
}

export const ShoppingCartButton = React.forwardRef<
  HTMLButtonElement,
  ShoppingCartButtonProps
>(
  (
    {
      size,
      backgroundColor,
      counter,
      removeButton,
      ...rest
    }: ShoppingCartButtonProps,
    forwardedRef,
  ) => {
    const hasCounter = !!counter

    return (
      <ShoppingCartButtonContainer
        backgroundColor={backgroundColor}
        removeButton={removeButton}
        hasCounter={hasCounter}
        ref={forwardedRef}
        {...rest}
      >
        {hasCounter && <span>{counter}</span>}
        <Handbag weight="bold" size={size || 32} />
      </ShoppingCartButtonContainer>
    )
  },
)

ShoppingCartButton.displayName = 'ShoppingCartButton'

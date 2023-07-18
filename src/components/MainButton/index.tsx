import React from 'react'

import { MainButtonContainer } from './styles'

interface MainButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string
  removeButton?: boolean
}

export default function MainButton({
  content,
  removeButton,
  ...rest
}: MainButtonProps) {
  return (
    <MainButtonContainer removeButton={removeButton} {...rest}>
      {content}
    </MainButtonContainer>
  )
}

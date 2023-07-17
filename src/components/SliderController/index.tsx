import { CaretRight } from '@phosphor-icons/react'
import React from 'react'

import { SliderControllerContainer } from './styles'

interface SliderControllerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  left?: boolean
  hidden?: boolean
}

export default function SliderController({
  left,
  hidden,
  ...rest
}: SliderControllerProps) {
  return (
    <SliderControllerContainer left={left} hidden={hidden}>
      <button {...rest}>
        <CaretRight size={48} />
      </button>
    </SliderControllerContainer>
  )
}

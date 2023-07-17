import { styled } from '../../styles'

export const ShoppingCartButtonContainer = styled('button', {
  background: '$green500',

  padding: '0.75rem',
  border: 'none',
  borderRadius: 6,

  color: '$white',
  lineHeight: 0,

  cursor: 'pointer',

  '&:hover': {
    background: '$green300',

    color: '$white',

    transition: 'background-color 0.2s, color 0.2s',
  },

  variants: {
    backgroundColor: {
      gray: {
        background: '$gray800',

        color: '#8D8D99',
      },
    },
  },
})

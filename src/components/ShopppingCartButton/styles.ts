import { styled } from '../../styles'

export const ShoppingCartButtonContainer = styled('button', {
  position: 'relative',

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

  span: {
    position: 'absolute',
    top: 'calc((1.5rem * 0.25) * -1)',
    right: 'calc((1.5rem * 0.25) * -1)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: '$green500',
    width: '1.5rem',
    height: '1.5rem',

    border: '3px solid $gray900',
    borderRadius: '50%',

    color: '$white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },

  variants: {
    backgroundColor: {
      gray: {
        background: '$gray800',

        color: '#8D8D99',
      },
    },

    removeButton: {
      true: {
        background: '$red500',

        color: '$white',

        '&:hover': {
          background: '$red300',
        },
      },
    },
  },
})

import { styled } from '../../styles'

export const ShoppingCartButtonContainer = styled('button', {
  position: 'relative',

  background: '$brand-principal',

  padding: '0.75rem',
  border: 'none',
  borderRadius: 6,

  color: '$grayscale-white',
  lineHeight: 0,

  cursor: 'pointer',

  '&:hover': {
    background: '$brand-light',

    transition: 'background-color 0.2s, color 0.2s',
  },

  span: {
    position: 'absolute',
    top: 'calc((1.5rem * 0.25) * -1)',
    right: 'calc((1.5rem * 0.25) * -1)',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    background: '$brand-principal',
    width: '1.5rem',
    height: '1.5rem',

    border: '3px solid $grayscale-background',
    borderRadius: '50%',

    color: '$grayscale-white',
    fontSize: '0.875rem',
    fontWeight: 'bold',
  },

  variants: {
    backgroundColor: {
      gray: {
        background: '$grayscale-elements',

        color: '$grayscale-icon',

        '&:hover': {
          color: '$grayscale-white',
        },
      },
    },

    removeButton: {
      true: {
        background: '$color-red',

        color: '$grayscale-white',

        '&:hover': {
          background: '$color-red-light',
        },
      },
    },

    hasCounter: {
      true: {
        color: '$grayscale-white',
      },
    },
  },
})

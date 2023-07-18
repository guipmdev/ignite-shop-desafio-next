import { styled } from '../../styles'

export const MainButtonContainer = styled('button', {
  background: '$brand-principal',
  width: '100%',

  padding: '1.25rem',
  border: 0,
  borderRadius: 8,
  marginTop: 'auto',

  color: '$grayscale-white',
  fontWeight: 700,

  cursor: 'pointer',

  '&:hover': {
    background: '$brand-light',

    transition: 'background-color 0.2s',
  },

  '&:disabled': {
    opacity: 0.6,

    cursor: 'not-allowed',
  },

  variants: {
    removeButton: {
      true: {
        background: '$color-red',

        '&:hover': {
          background: '$color-red-light',
        },
      },
    },
  },
})

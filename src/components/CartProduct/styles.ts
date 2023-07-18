import { styled } from '../../styles'

export const CartProductContainer = styled('li', {
  display: 'flex',
  alignItems: 'center',
  gap: '1.25rem',

  '.product-infos': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  span: {
    display: 'block',

    marginBottom: '0.125rem',

    fontSize: '$font-size-lg',
  },

  strong: {
    display: 'block',

    marginBottom: '0.5rem',

    color: '$grayscale-title',
    fontSize: '$font-size-lg',
  },

  button: {
    color: '$brand-principal',
    fontWeight: 700,

    background: 'transparent',
    width: 'fit-content',

    border: 'none',

    cursor: 'pointer',

    '&:hover': {
      color: '$brand-light',

      transition: 'color 0.2s',
    },
  },
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, $color-green 0%, $color-purple 100%)',
  width: '100%',
  maxWidth: 102,
  height: 93,

  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

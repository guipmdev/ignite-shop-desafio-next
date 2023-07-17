import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,

  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  width: '100%',
  maxWidth: 576,
  height: 656,

  padding: '0.25rem',
  borderRadius: 8,

  img: {
    objectFit: 'cover',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    color: '$gray300',
    fontSize: '$2xl',
  },

  span: {
    display: 'block',

    marginTop: '1rem',

    color: '$green300',
    fontSize: '$2xl',
  },

  p: {
    marginTop: '2.5rem',

    color: '$gray300',
    fontSize: '$md',
    lineHeight: 1.6,
  },
})

export const ShoppingCartButton = styled('button', {
  background: '$green500',

  padding: '1.25rem',
  border: 0,
  borderRadius: 8,
  marginTop: 'auto',

  color: '$white',
  fontSize: '$md',
  fontWeight: 'bold',

  cursor: 'pointer',

  '&:hover': {
    background: '$green300',
  },

  variants: {
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

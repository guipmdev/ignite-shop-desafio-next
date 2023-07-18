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

  background: 'linear-gradient(180deg, $color-green 0%, $color-purple 100%)',
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
    fontSize: '$font-size-4xl',
    lineHeight: '140%',
  },

  span: {
    display: 'block',

    marginTop: '1rem',

    color: '$brand-light',
    fontSize: '$font-size-4xl',
    lineHeight: '140%',
  },

  p: {
    marginTop: '2.5rem',
  },
})

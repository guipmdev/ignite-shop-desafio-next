import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  height: 656,

  margin: '0 auto',

  h1: {
    color: '$grayscale-title',
    fontSize: '$font-size-4xl',
    lineHeight: '140%',

    marginBottom: '4rem',
  },

  p: {
    maxWidth: 560,

    marginTop: '2rem',

    fontSize: '$font-size-2xl',
    textAlign: 'center',
    lineHeight: '140%',
  },

  '.images': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',

    'div + div': {
      marginLeft: '-10%',
    },
  },

  a: {
    display: 'block',

    marginTop: '5rem',

    color: '$brand-principal',
    fontSize: '$font-size-xl',
    fontWeight: 700,
    textDecoration: 'none',

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
  width: 140,
  height: 140,

  padding: '0.25rem',
  borderRadius: '50%',

  boxShadow: '0 0 60px 0 rgb(0 0 0 / 80%)',

  img: {
    objectFit: 'cover',
  },
})

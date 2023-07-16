import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  minHeight: 656,

  marginLeft: 'auto',
})

export const Product = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

  borderRadius: 8,

  cursor: 'pointer',

  img: {
    objectFit: 'cover',
  },

  footer: {
    opacity: 0,
    overflow: 'hidden',

    position: 'absolute',
    right: '0.25rem',
    bottom: '0.25rem',
    left: '0.25rem',

    transform: 'translateY(110%)',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgb(0 0 0 / 0.6)',

    padding: '2rem',
    borderRadius: 6,

    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      color: '$green300',
      fontSize: '$xl',
      fontWeight: 'bold',
    },
  },

  '&:hover': {
    footer: {
      opacity: 1,

      transform: 'translateY(0%)',
    },
  },
})

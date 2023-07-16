import { styled } from '../../styles'

export const ProductContainer = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  maxWidth: 696,

  borderRadius: 8,

  variants: {
    isPlaceholder: {
      true: {
        flexDirection: 'column',
        gap: '1.5rem',

        background: 'transparent',

        div: {
          background: '$gray800',
          width: '100%',
          height: '100%',

          borderRadius: 8,
        },

        '.image': {
          flex: 1,
        },

        footer: {
          display: 'flex',
          justifyContent: 'space-between',

          width: '100%',
          height: 32,
        },

        '.title': {
          maxWidth: '50%',
        },

        '.price': {
          maxWidth: '12.5%',
        },
      },

      false: {
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',

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
      },
    },
  },
})

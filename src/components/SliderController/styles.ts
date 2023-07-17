import { keyframes, styled } from '../../styles'

const changeVisibility = keyframes({
  '99%': {
    visibility: 'visible',
  },

  '100%': {
    visibility: 'hidden',
  },
})

export const SliderControllerContainer = styled('div', {
  position: 'absolute',
  right: 0,

  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',

  background: 'linear-gradient(-90deg, $gray900 0%, transparent 100%)',
  width: '100%',
  maxWidth: 136,
  height: '100%',

  transition: 'opacity 0.2s, max-width 0.2s',

  button: {
    display: 'flex',

    background: 'transparent',

    border: 'none',
    marginRight: 30,

    color: '$gray300',
    lineHeight: 0,

    cursor: 'pointer',

    '&:hover': {
      color: '$white',
    },
  },

  variants: {
    left: {
      true: {
        left: 0,

        justifyContent: 'flex-start',

        background: 'linear-gradient(90deg, $gray900 0%, transparent 100%)',

        button: {
          rotate: '180deg',

          marginLeft: 30,
        },
      },
    },

    hidden: {
      true: {
        opacity: 0,

        maxWidth: 0,

        animation: `${changeVisibility} 0.2s forwards`,
      },
    },
  },
})

import { keyframes, styled } from '..'

export const HomeContainer = styled('main', {
  position: 'relative',

  display: 'flex',

  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 73.75rem) / 2))',
  minHeight: 656,

  marginLeft: 'auto',
})

const changeVisibility = keyframes({
  '99%': {
    visibility: 'visible',
  },
  '100%': {
    visibility: 'hidden',
  },
})

export const SliderController = styled('div', {
  opacity: '100%',

  position: 'absolute',

  display: 'flex',
  alignItems: 'center',

  maxWidth: 136,
  width: '100%',
  height: '100%',

  transition: 'opacity 0.2s, max-width 0.2s',

  button: {
    display: 'flex',
    lineHeight: 0,

    cursor: 'pointer',

    background: 'transparent',
    border: 'none',

    color: '$gray300',

    '&:hover': {
      color: '$white',
    },
  },

  '&.left': {
    background: 'linear-gradient(90deg, $gray900 0%, transparent 100%)',

    button: {
      marginLeft: 30,
    },
  },

  '&.right': {
    background: 'linear-gradient(-90deg, $gray900 0%, transparent 100%)',

    justifyContent: 'flex-end',

    right: 0,

    button: {
      marginRight: 30,
    },
  },

  variants: {
    hidden: {
      true: {
        animation: `${changeVisibility} 0.2s forwards`,
        maxWidth: 0,
        opacity: 0,
      },
    },
  },
})

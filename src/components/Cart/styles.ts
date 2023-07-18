import * as Dialog from '@radix-ui/react-dialog'

import { styled } from '../../styles'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,

  width: '100vw',
  height: '100vh',
})

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  gap: '3.5625rem',

  background: '$grayscale-elements',
  width: 480,
  height: '100%',

  padding: '4.5rem 3rem 3rem',

  boxShadow: '-4px 0 30px 0 rgb(0 0 0 / 80%)',

  ul: {
    flex: 1,
  },

  '.order-summary': {
    marginBottom: '3.5625rem',

    div: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      span: {
        fontSize: '$font-size-lg',
      },
    },

    'div + div': {
      marginTop: '0.4375rem',
    },

    '.total-price': {
      fontWeight: 700,
      fontSize: '$font-size-lg',

      span: {
        fontSize: '$font-size-2xl',
        lineHeight: '140%',
      },
    },
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 24,

  background: 'transparent',

  border: 'none',

  color: '$grayscale-icon',
  lineHeight: 0,

  cursor: 'pointer',

  '&:hover': {
    color: '$grayscale-text',

    transition: 'color 0.2s',
  },
})

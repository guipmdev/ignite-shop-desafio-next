import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { useShoppingCart } from 'use-shopping-cart'

import { currencyFormatter } from '../../utils/formatters'
import CartProduct from '../CartProduct'
import MainButton from '../MainButton'
import { CloseButton, Content, Overlay } from './styles'

export default function Cart() {
  const { cartCount, totalPrice } = useShoppingCart()

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CloseButton>
          <X weight="bold" size={32} />
        </CloseButton>

        <ul>
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </ul>

        <footer>
          <div className="order-summary">
            <div>
              <p>Quantidade</p>{' '}
              <span>
                {cartCount} {cartCount! > 1 ? 'itens' : 'item'}
              </span>
            </div>

            <div className="total-price">
              <p>
                <strong>Valor total</strong>
              </p>

              <span>
                <strong>{currencyFormatter.format(totalPrice! / 100)}</strong>
              </span>
            </div>
          </div>

          <MainButton content="Finalizar compra" />
        </footer>
      </Content>
    </Dialog.Portal>
  )
}

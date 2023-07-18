import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'

import MainButton from '../MainButton'
import { CloseButton, Content, Overlay } from './styles'

export default function Cart() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CloseButton>
          <X weight="bold" size={32} />
        </CloseButton>

        <ul></ul>

        <footer>
          <div className="order-summary">
            <div>
              <p>Quantidade</p> <span>3 itens</span>
            </div>

            <div className="total-price">
              <p>
                <strong>Valor total</strong>
              </p>

              <span>
                <strong>R$ 270,00</strong>
              </span>
            </div>
          </div>

          <MainButton content="Finalizar compra" />
        </footer>
      </Content>
    </Dialog.Portal>
  )
}

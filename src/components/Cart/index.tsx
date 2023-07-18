import { X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import React, { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'
import { CartDetails } from 'use-shopping-cart/core'

import { currencyFormatter } from '../../utils/formatters'
import { CartProduct } from '../CartProduct'
import { MainButton } from '../MainButton'
import { CloseButton, Content, Overlay } from './styles'

interface Product {
  price: string
  quantity: number
}

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const cart = useShoppingCart()
  const { clearCart, removeItem } = cart

  const cartDetails = cart.cartDetails || ({} as CartDetails)
  const cartCount = cart.cartCount || 0
  const totalPrice = cart.totalPrice || 0

  async function handleCreateCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const selectedProducts: Product[] = Object.keys(cartDetails).map(
        (cartProductId) => {
          return {
            price: cartDetails[cartProductId].price_id,
            quantity: cartDetails[cartProductId].quantity,
          }
        },
      )

      const response = await axios.post('/api/checkout', {
        selectedProducts,
      })

      clearCart()

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry)

      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Sacola de compras</Dialog.Title>

        <CloseButton>
          <X weight="bold" size={32} />
        </CloseButton>

        <ul>
          {Object.keys(cartDetails).map((cartProductId) => {
            return (
              <CartProduct
                key={cartProductId}
                product={cartDetails[cartProductId]}
                removeItem={removeItem}
              />
            )
          })}
        </ul>

        <footer>
          <div className="order-summary">
            <div>
              <p>Quantidade</p>{' '}
              <span>
                {cartCount} {cartCount > 1 ? 'itens' : 'item'}
              </span>
            </div>

            <div className="total-price">
              <p>
                <strong>Valor total</strong>
              </p>

              <span>
                <strong>{currencyFormatter.format(totalPrice / 100)}</strong>
              </span>
            </div>
          </div>

          <MainButton
            content="Finalizar compra"
            onClick={handleCreateCheckout}
            disabled={isCreatingCheckoutSession}
          />
        </footer>
      </Content>
    </Dialog.Portal>
  )
}

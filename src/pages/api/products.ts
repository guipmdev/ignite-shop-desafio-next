import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.images[0],
      defaultPriceId: price.id,
      price: price.unit_amount,
      currency: price.currency.toUpperCase(),
    }
  })

  return res.status(200).json(products)
}

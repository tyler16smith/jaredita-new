
import { getSecretKey } from "@/utils/get-stripejs";

type CreateCheckoutSessionProps = {
  donations: any
  donor: any
}

export const createCheckoutSession = async ({ donations, donor }: CreateCheckoutSessionProps) => {
  const key = getSecretKey() || "";
  const stripe = require("stripe")(key);
  
  return await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });
}
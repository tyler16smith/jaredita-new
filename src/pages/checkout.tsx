import React, { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { getAPIKey } from '@/utils/get-stripejs';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(getAPIKey());

export default function Checkout() {
  const router = useRouter()
  const { donationSessionId } = router.query

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify({ donationSessionId }),
    })
      .then((res) => res.json())
      .then((data) => data.clientSecret);
  }, []);

  const options = { fetchClientSecret };

  return (
    <div id="checkout" className='w-full max-w-[500px]'>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  )
}
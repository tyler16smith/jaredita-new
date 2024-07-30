import React, { useCallback, useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
import { getAPIKey } from '@/utils/get-stripejs';
import { useRouter } from 'next/router';

const stripePromise = loadStripe(getAPIKey());

export default function Checkout() {
  const router = useRouter();
  const { donationSessionId } = router.query;
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const fetchClientSecret = useCallback(() => {
    if (!donationSessionId) return;

    fetch("/api/checkout_sessions", {
      method: "POST",
      body: JSON.stringify({ donationSessionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        console.error('Error fetching client secret:', error);
      });
  }, [donationSessionId]);

  useEffect(() => {
    fetchClientSecret();
  }, [fetchClientSecret]);

  if (!donationSessionId || !clientSecret) {
    return <div>Loading...</div>;
  }

  const options = { clientSecret };

  return (
    <div id="checkout" className='w-full max-w-[500px]'>
      <EmbeddedCheckoutProvider
        stripe={stripePromise}
        options={options}
      >
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
    </div>
  );
}

import { type Stripe, loadStripe } from "@stripe/stripe-js";

let stripePromise: Promise<Stripe | null>;

const getStripe = () => {
  if (!stripePromise) {
    const key = getAPIKey() ?? "";
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

export default getStripe;

export const getAPIKey = () => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
  if (env && env === "development") {
    return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST;
  } else {
    return process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  }
};

export const getSecretKey = () => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
  if (env && env === "development") {
    return process.env.STRIPE_SECRET_KEY_TEST;
  } else {
    return process.env.STRIPE_SECRET_KEY;
  }
};

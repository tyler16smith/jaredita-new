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
  const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const testKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST;

  if (env && env === "development") {
    if (!testKey) {
      throw new Error("Stripe test key is not set");
    }
    return testKey;
  } else {
    if (!key) {
      throw new Error("Stripe key is not set");
    }
    return key;
  }
};

export const getSecretKey = () => {
  const env = process.env.NEXT_PUBLIC_ENVIRONMENT;
  const key = process.env.STRIPE_SECRET_KEY;
  const testKey = process.env.STRIPE_SECRET_KEY_TEST;

  if (env && env === "development") {
    if (!testKey) {
      throw new Error("Stripe test key is not set");
    }
    console.log("Using test key");
    return testKey;
  } else {
    if (!key) {
      throw new Error("Stripe key is not set");
    }
    console.log("Using live key");
    return key;
  }
};

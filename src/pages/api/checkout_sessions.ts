import { getSecretKey } from "@/utils/get-stripejs";

const stripe = require('stripe')(getSecretKey());

function getPriceId() {
  const priceId = process.env.STRIPE_STUDENT_SUBSCRIPTION_PRICE_ID;
  if (!priceId) {
    throw new Error('Stripe Student Subscription Price ID is not set');
  }
  return priceId;
}

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        const { donationSessionId } = req.body;
        // first get the session data from the database
        const sessionData = await getDonationSession(donationSessionId);

        const priceId = getPriceId();
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              // price: priceId,
              price: 'price_1PhDjsLIYf4BaeDBjvolc05U',
              quantity: 1,
            },
          ],
          mode: 'subscription',
          return_url:
            `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({clientSecret: session.client_secret});
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    case "GET":
      try {
        const session =
          await stripe.checkout.sessions.retrieve(req.query.session_id);

        res.send({
          status: session.status,
          customer_email: session.customer_details.email
        });
      } catch (err) {
        res.status(err.statusCode || 500).json(err.message);
      }
      break;
    default:
      res.setHeader('Allow', req.method);
      res.status(405).end('Method Not Allowed');
  }
}
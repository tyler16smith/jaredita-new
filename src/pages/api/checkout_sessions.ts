import { getDonationSession } from "@/server/services/donate";
import { getSecretKey } from "@/utils/get-stripejs";
import { DonationType, SponsorshipType, Frequency } from "@/utils/types";
const stripe = require('stripe')(getSecretKey());

const individualMonthlySubscriptionPriceId = process.env.STRIPE_INDIVIDUAL_MONTHLY_SUBSCRIPTION_PRICE_ID;
const individualYearlySubscriptionPriceId = process.env.STRIPE_INDIVIDUAL_YEARLY_SUBSCRIPTION_PRICE_ID;
const familyMonthlySubscriptionPriceId = process.env.STRIPE_FAMILY_MONTHLY_SUBSCRIPTION_PRICE_ID;
const familyYearlySubscriptionPriceId = process.env.STRIPE_FAMILY_YEARLY_SUBSCRIPTION_PRICE_ID;

type GetPriceIdProps = {
  type: string
  frequency: Frequency;
}
function getPriceId({ type, frequency }: GetPriceIdProps) {
  if (type === DonationType.individual) {
    if (frequency === Frequency.monthly) {
      return individualMonthlySubscriptionPriceId;
    }
    if (frequency === Frequency.yearly) {
      return individualYearlySubscriptionPriceId;
    }
  } else if (type === DonationType.family) {
    if (frequency === Frequency.monthly) {
      return familyMonthlySubscriptionPriceId;
    }
    if (frequency === Frequency.yearly) {
      return familyYearlySubscriptionPriceId;
    }
  }
  throw new Error('Stripe Student Subscription Price ID is not set');
}

export default async function handler(req: any, res: any) {
  switch (req.method) {
    case "POST":
      try {
        debugger
        const { donationSessionId } = JSON.parse(req.body);
        if (!donationSessionId) {
          throw new Error('Invalid donation session ID');
        }
        // first get the session data from the database
        const sessionData = await getDonationSession(donationSessionId);
        // determine the price id from the donation type
        if (!sessionData) return
        const priceId = getPriceId({
          type: sessionData?.type,
          frequency: sessionData?.frequency as Frequency,
        });

        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              // price: priceId,
              price: priceId,
              quantity: sessionData?.quantity,
            },
          ],
          mode: 'subscription',
          return_url:
            `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        res.send({clientSecret: session.client_secret});
      } catch (err: any) {
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
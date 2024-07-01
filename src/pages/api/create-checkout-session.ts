// import { getSecretKey } from "@/utils/get-stripejs";

import { createCheckoutSession } from "@/server/services/stripe";

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        message: "Method Not Allowed",
      });
    }
    const donor = req.body.donor;
    const donations = req.body.donation;
    const session = await createCheckoutSession(donor, donations);
  
    res.redirect(303, session.url);

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
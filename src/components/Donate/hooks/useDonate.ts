import { useState } from "react"

const useDonate = () => {
  const [sponsorDonateToggle, setSponsorDonateToggle] = useState<'sponsor' | 'donate'>('sponsor');
  // const { data: donationOpportunities } = api.donate.getDonationOpportunities.useQuery();

  return {
    sponsorDonateToggle,
    setSponsorDonateToggle,
    // donationOpportunities,
  };
}

export default useDonate;
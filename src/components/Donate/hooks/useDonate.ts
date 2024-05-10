import { RouterOutputs, api } from "@/utils/api"

export type TUseDonate = {
  donationOpportunities: RouterOutputs["donate"]["getDonationOpportunities"]
}

const useDonate = (): TUseDonate => {
  const { data: donationOpportunities } = api.donate.getDonationOpportunities.useQuery();

  return {
    donationOpportunities: donationOpportunities ?? [],
  };
}

export default useDonate;
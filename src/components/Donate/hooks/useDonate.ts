import { useState } from "react"
import { SponsorshipType, TSponsorshipOption } from "@/utils/types";
import { api } from "@/utils/api";

type SponsorshipToggle = 'sponsor' | 'donate';
type DonationState = {
  sponsorshipToggle: SponsorshipToggle
  typeSelected: SponsorshipType
  sponsorshipSelected: TSponsorshipOption | null
  donationsSelected: string[]
}

const useDonate = () => {
  const [donationState, setDonationState] = useState<DonationState>({
    sponsorshipToggle: 'sponsor',
    typeSelected: null,
    sponsorshipSelected: null,
    donationsSelected: [],
  });
  // server api calls
  // const { data: donationOpportunities} = api.donate.getDonationOpportunities.useQuery()
    // { type: donationState.typeSelected },
    // { enabled: donationState.typeSelected === 'individual' || donationState.typeSelected === 'family' }
  // );

  const handleSelectDonation = (id: string) => () => {
    const newDonationsSelected = donationState.donationsSelected.includes(id)
      ? donationState.donationsSelected.filter((donationId) => donationId !== id)
      : [...donationState.donationsSelected, id];
  
    setDonationState({
      ...donationState,
      donationsSelected: newDonationsSelected,
    });
  };  

  return {
    donationState,
    setDonationState,
    handleSelectDonation,
  };
}

export default useDonate;
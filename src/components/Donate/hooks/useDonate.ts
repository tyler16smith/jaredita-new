import { useState } from "react"
import { DonationState } from "@/utils/types";
import { initialDonorFormData, initialDonationState } from "@/utils/data";

const useDonate = () => {
  const [donationState, setDonationState] = useState<DonationState>(initialDonationState);
  const [donorForm, setDonorForm] = useState(initialDonorFormData)

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
    donorForm,
    setDonorForm,
  };
}

export default useDonate;
import { useState } from "react"
import { DonationState } from "@/utils/types";
import { initialDonorFormData, initialDonationState } from "@/utils/data";
import toast from "react-hot-toast";

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

  const handleCheckout = async () => {
    try {
      await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          donations: donationState.donationsSelected,
          donor: donorForm,
        }),
      });
    } catch (error) {
      toast.error('Failed to checkout. Please try again later.');
    }
  }

  return {
    donationState,
    setDonationState,
    handleSelectDonation,
    donorForm,
    setDonorForm,
    handleCheckout,
  };
}

export default useDonate;
import { useMemo, useState } from "react"
import { DonationState, SponsorshipToggle } from "@/utils/types";
import { initialDonorFormData, initialDonationState } from "@/utils/data";
import toast from "react-hot-toast";

const useDonate = () => {
  // state data
  const [donationState, setDonationState] = useState<DonationState>(initialDonationState);
  const [donorForm, setDonorForm] = useState(initialDonorFormData)

  // variable data
  const showDonorForm = useMemo(() => {
    return (
      (donationState.sponsorshipToggle === SponsorshipToggle.sponsor &&
        donationState.typeSelected)
      ||
      (donationState.sponsorshipToggle === SponsorshipToggle.donate &&
        donationState.moneyDonationAmount
      )
    )
  }, [donationState]);

  const donationTotal = useMemo(() => {
    if (donationState.coverTransactionFee) {
      return donationState.totalCost + (donationState.totalCost * 0.03)
    }
    return donationState.totalCost
  }, [donationState]);

  // handler functions
  const handleSelectDonation = (id: string, cost: number) => () => {
    const unselectingDonation = donationState.donationsSelected.includes(id)
    const newDonationsSelected = unselectingDonation
      ? donationState.donationsSelected.filter((donationId) => donationId !== id)
      : [...donationState.donationsSelected, id];
    const newTotalCost = unselectingDonation
      ? donationState.totalCost - cost
      : donationState.totalCost + cost;
    
    setDonationState({
      ...donationState,
      donationsSelected: newDonationsSelected,
      totalCost: newTotalCost,
    });
  };

  const handleCheckout = async () => {
    return toast('Full checkout coming soon', { icon: '🚀' });
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
    donationTotal,
    donationState,
    setDonationState,
    handleSelectDonation,
    donorForm,
    setDonorForm,
    handleCheckout,
    showDonorForm,
  };
}

export default useDonate;
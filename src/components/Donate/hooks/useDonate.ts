import { useMemo, useState } from "react"
import { type DonationState, SponsorshipToggle, Frequency } from "@/utils/types";
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
      ??
      (donationState.sponsorshipToggle === SponsorshipToggle.donate &&
        donationState.moneyDonationAmount
      )
    )
  }, [donationState]);

  const donationTotal = useMemo(() => {
    let totalCost = donationState.totalCost;
    if (donationState.coverTransactionFee) {
      totalCost += (donationState.totalCost * 0.03)
    }
    if (donationState.frequency === Frequency.yearly) {
      totalCost *= 12
    }
    return totalCost
  }, [donationState]);

  const costBreakdown = useMemo(() => {
    if (!donationState.coverTransactionFee || donationState.totalCost === 0) {
      return '';
    }
    const frequencyMultiple = donationState.frequency === Frequency.yearly ? 12 : 1;
    
    const totalCost = donationState.totalCost * frequencyMultiple;
    const transactionFee = donationState.totalCost * frequencyMultiple * 0.03;
    return `(${totalCost.toFixed(2)} + ${transactionFee.toFixed(2)} fees)`;
  }, [donationState]);

  const cadence = useMemo(() => {
    switch (donationState.frequency) {
      case Frequency.monthly:
        return {
          label: 'monthly',
          value: '/month',
        };
      case Frequency.yearly:
        return {
          label: 'yearly',
          value: '/year',
        };
      default:
        return {
          label: '',
          value: '',
        };
    }
  }, [donationState?.frequency]);

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
    cadence,
    donationTotal,
    donationState,
    setDonationState,
    handleSelectDonation,
    donorForm,
    setDonorForm,
    handleCheckout,
    showDonorForm,
    costBreakdown,
  };
}

export default useDonate;
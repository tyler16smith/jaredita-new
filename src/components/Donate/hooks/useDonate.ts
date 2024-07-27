import { useEffect, useMemo, useState } from "react"
import { useRouter } from "next/router";
import { type DonationState, SponsorshipToggle, Frequency, TFrequency, SponsorshipType } from "@/utils/types";
import { initialDonorFormData, initialDonationState } from "@/utils/data";
import { api } from "@/utils/api";
import toast from "react-hot-toast";

const useDonate = () => {
  const router = useRouter()
  
  // state data
  const [donationState, setDonationState] = useState<DonationState>(initialDonationState);
  const [donorForm, setDonorForm] = useState(initialDonorFormData)
  
  // api
  const createDonationSession = api.donate.createDonationSession.useMutation()
  
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
    debugger
    // TODO: account for families and orphanage
    const type = donationState.typeSelected;
    if (!type) return
    const numberOfStudents = donationState.donationsSelected.length;
    // create donation session
    createDonationSession.mutate({
      type: donationState.typeSelected,
      frequency: donationState.frequency,
      coverTransactionFee: donationState.coverTransactionFee,
      amount: donationState.totalCost,
      quantity: numberOfStudents,
      firstName: donorForm.firstName,
      email: donorForm.email,
    })
  }

  useEffect(() => {
    if (createDonationSession.data) {
      router.push(`/checkout?donationSessionId=${createDonationSession.data}`)
    }
  }, [createDonationSession.data])

  useEffect(() => {
    if (createDonationSession.error) {
      toast.error('Failed to checkout. Please try again later.')
    }
  }, [createDonationSession.error])

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
    checkoutLoading: createDonationSession.isPending,
  };
}

export default useDonate;
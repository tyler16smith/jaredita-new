import { DonationState } from "@/utils/types";

export const getHeaderAndPrice = (donationState: DonationState) => {
  let header = ''
  let pricePerMonth = 0
  const numDonations = donationState.donationsSelected.length
  const single = numDonations === 1

  if (donationState.sponsorshipSelected?.type === 'individual') {
    header = `${numDonations} ${single ? 'student' : 'students'} selected`
    pricePerMonth = numDonations * 15
  }

  if (donationState.sponsorshipSelected?.type === 'family') {
    header = `${numDonations} ${single ? 'family' : 'families'} selected`
    pricePerMonth = numDonations * 15
  }

  return { header, pricePerMonth }
}
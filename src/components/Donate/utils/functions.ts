import { Frequency, type DonationState } from "@/utils/types";

export const getHeaderAndPrice = (donationState: DonationState) => {
  let header = ''
  const cost = donationState.frequency === Frequency.yearly
    ? donationState.totalCost * 12
    : donationState.totalCost
  const numDonations = donationState.donationsSelected.length
  const single = numDonations === 1

  if (donationState.sponsorshipSelected?.type === 'individual') {
    header = `${numDonations} ${single ? 'student' : 'students'} selected`
  }

  if (donationState.sponsorshipSelected?.type === 'family') {
    header = `${numDonations} ${single ? 'family' : 'families'} selected`
  }

  return { header, cost }
}

type GetLabelProps = {
  frequency: Frequency
  type: string
  donationCost: number
  age: number
  numberOfStudents: number
}
export const getLabel = (
  frequency,
  type,
  donationCost,
  age,
  numberOfStudents,
): GetLabelProps => {
  
}
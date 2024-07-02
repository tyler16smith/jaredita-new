import { DonationState } from "@/utils/types";

export const getHeaderAndPrice = (donationState: DonationState) => {
  let header = ''
  let pricePerMonth = donationState.totalCost
  const numDonations = donationState.donationsSelected.length
  const single = numDonations === 1

  if (donationState.sponsorshipSelected?.type === 'individual') {
    header = `${numDonations} ${single ? 'student' : 'students'} selected`
  }

  if (donationState.sponsorshipSelected?.type === 'family') {
    header = `${numDonations} ${single ? 'family' : 'families'} selected`
  }

  return { header, pricePerMonth }
}

export const getLabel = (type: string | null, opportunity: any) => {
  if (type === 'individual') {
    return `${opportunity.age} year old student`
  }
  if (type === 'family') {
    return `Family of ${opportunity.numberOfStudents} students`
  }
}
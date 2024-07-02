import { type DonationState } from "@/utils/types";

export const getHeaderAndPrice = (donationState: DonationState) => {
  let header = ''
  const pricePerMonth = donationState.totalCost
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

export const getLabel = (type: string | null, age: number, numberOfStudents: number) => {
  if (type === 'individual') {
    return `${age} year old student`
  }
  if (type === 'family') {
    return `Family of ${numberOfStudents} students`
  }
}
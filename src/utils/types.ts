// types.ts (global)

export type SponsorshipType = "individual" | "family" | "orphanage" | null
export type TSponsorshipOption = {
  id: string
  title: string
  type: SponsorshipType,
  description: string
  icon: React.ReactNode
  highlight: boolean
  coverImage: string
  content: React.ReactNode
}
export enum SponsorshipToggle {
  sponsor = 'sponsor',
  donate = 'donate'
}
export type TSponsorshipToggle = keyof typeof SponsorshipToggle
export type DonationState = {
  sponsorshipToggle: SponsorshipToggle
  typeSelected: SponsorshipType
  sponsorshipSelected: TSponsorshipOption | null
  donationsSelected: string[]
  enterInfo: boolean
  moneyDonationAmount: number | null
  totalCost: number
  coverTransactionFee: boolean
}
export type DonorData = {
  name?: string;
  firstName?: string;
  lastName?: string;
  email: string;
  phone: string;
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  comment: string;
};
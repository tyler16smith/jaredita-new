// types.ts (global)

import { z } from "zod"
import { atLeastOne } from "./array"

// must match the DonationType enum in the database (schema.prisma)
// TODO: auto generate this from the database
export enum DonationType {
  individual = 'individual',
  family = 'family',
  orphanage = 'orphanage',
  general = 'general',
}
export type SponsorshipType = keyof typeof DonationType | null
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
// must match the Frequency enum in the database (schema.prisma)
// TODO: auto generate this from the database
export enum Frequency {
  monthly = 'monthly',
  yearly = 'yearly',
  once = 'once',
}
export type TFrequency = keyof typeof Frequency
export type DonationState = {
  sponsorshipToggle: SponsorshipToggle
  typeSelected: SponsorshipType
  sponsorshipSelected: TSponsorshipOption | null
  donationsSelected: string[]
  enterInfo: boolean
  moneyDonationAmount: number | null
  frequency: Frequency,
  coverTransactionFee: boolean
  totalCost: number
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
// Donation Session
export type DonationSession = {
  type: DonationType
  frequency: TFrequency
  coverTransactionFee: boolean
  amount: number
  quantity: number
  firstName: string
  email: string
  donationIdsSelected: string[]
  completedCheckout: boolean
}
export const DonationSessionSchema = z.object({
  donationSession: z.object({
    type: z.enum(atLeastOne([
      DonationType.individual,
      DonationType.family,
      DonationType.orphanage,
      DonationType.general,
    ])),
    frequency: z.enum(atLeastOne([
      Frequency.monthly,
      Frequency.yearly,
      Frequency.once,
    ])),
    coverTransactionFee: z.boolean(),
    amount: z.number(),
    quantity: z.number(),
    firstName: z.string(),
    email: z.string().email(),
    donationIdsSelected: z.array(z.string()),
    completedCheckout: z.boolean(),
  }),
})
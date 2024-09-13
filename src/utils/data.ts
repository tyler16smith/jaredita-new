import { type DonorData, SponsorshipToggle, Frequency } from "./types";

export const initialDonorFormData: DonorData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  streetAddress1: "",
  streetAddress2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  comment: "",
};
export const initialDonationState = {
  sponsorshipToggle: SponsorshipToggle.sponsor,
  typeSelected: null,
  sponsorshipSelected: null,
  donationsSelected: [],
  enterInfo: false,
  moneyDonationAmount: null,
  totalCost: 0,
  coverTransactionFee: true,
  frequency: Frequency.monthly,
}
export const donationAmounts = [10, 25, 50, 100, 250, 500, 1000];

export const IMAGE_PLACEHOLDER = 'https://hhbycjxzzbapfgxnojhq.supabase.co/storage/v1/object/public/images/dog.png'
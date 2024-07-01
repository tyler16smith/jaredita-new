import { DonorData } from "./types";

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
  sponsorshipToggle: 'sponsor',
  typeSelected: null,
  sponsorshipSelected: null,
  donationsSelected: [],
  enterInfo: false,
}
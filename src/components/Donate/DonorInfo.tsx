import { initialDonorFormData } from "@/utils/data";
import { DonorData, SponsorshipToggle } from "@/utils/types";
import { useDonateContext } from "./context/DonateProvider";
import { useMemo } from "react";
import { Tooltip } from "@radix-ui/react-tooltip";
// import CountryDropdown from "./CountryDropdown";

export const FormStyles = {
  Label: "block text-sm font-medium text-gray-600 mb-1",
  Input:
    "border rounded-md p-2 w-full outline-none focus:ring-2 focus:ring-blue-300",
  Button: "bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 mt-10",
};

const DonorForm = () => {
  const { donorForm, setDonorForm, donationState } = useDonateContext()

  const disableForm = useMemo(() => {
    return (
      (donationState.sponsorshipToggle === SponsorshipToggle.sponsor &&
        donationState.donationsSelected?.length === 0)
      ||
      (donationState.sponsorshipToggle === SponsorshipToggle.donate &&
        !donationState.moneyDonationAmount
      )
    )
  }, [donationState])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setDonorForm({
      ...donorForm,
      [name]: value,
    });
  };

  const handleSetCountry = (country: string) => {
    setDonorForm({
      ...donorForm,
      country: country,
    });
  };

  return (
    <>
      <p className='uppercase text-sm font-semibold text-gray-500'>
        Donor information
      </p>
      <div className="relative mt-4">
        {disableForm && (
          <Tooltip>
            <div className="absolute inset-0 bg-gray-50 opacity-50" />
          </Tooltip>
        )}
        <div className="md:flex justify-start items-center gap-4">
          <div className="mb-4">
            <label htmlFor="firstName" className={FormStyles.Label}>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              value={donorForm.firstName}
              onChange={handleChange}
              className={FormStyles.Input}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className={FormStyles.Label}>
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              value={donorForm.lastName}
              onChange={handleChange}
              className={FormStyles.Input}
            />
          </div>
        </div>

        <div className="md:flex justify-start items-center gap-4">
          <div className="mb-4">
            <label htmlFor="email" className={FormStyles.Label}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={donorForm.email}
              onChange={handleChange}
              className={FormStyles.Input}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className={FormStyles.Label}>
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="555-555-5555"
              value={donorForm.phone}
              onChange={handleChange}
              className={FormStyles.Input}
            />
          </div>
        </div>

        <div className="md:flex flex-col justify-start items-start mt-3">
          <div className="md:flex justify-start items-center gap-3">
            <div className="mb-4">
              <label htmlFor="street" className={FormStyles.Label}>
                Street Address 1
              </label>
              <input
                type="text"
                name="streetAddress1"
                placeholder="123 Main St"
                value={donorForm.streetAddress1}
                onChange={handleChange}
                className={FormStyles.Input}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="street" className={FormStyles.Label}>
                Street Address 2
              </label>
              <input
                type="text"
                name="streetAddress2"
                placeholder="Apt 123"
                value={donorForm.streetAddress2}
                onChange={handleChange}
                className={FormStyles.Input}
              />
            </div>
          </div>

          <div className="md:flex justify-start items-center gap-3">
            <div className="mb-4">
              <label htmlFor="city" className={FormStyles.Label}>
                City
              </label>
              <input
                type="text"
                name="city"
                placeholder="Salt Lake City"
                value={donorForm.city}
                onChange={handleChange}
                className="border rounded p-2 w-full md:w-58 outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="flex justify-start items-center gap-3">
              <div className="mb-4">
                <label htmlFor="state" className={FormStyles.Label}>
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  placeholder="UT"
                  value={donorForm.state}
                  onChange={handleChange}
                  className="border rounded p-2 w-16 outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="zip" className={FormStyles.Label}>
                  ZIP Code
                </label>
                <input
                  type="text"
                  name="zip"
                  placeholder="84101"
                  value={donorForm.zip}
                  onChange={handleChange}
                  className="border rounded p-2 w-32 outline-none focus:ring-2 focus:ring-blue-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <CountryDropdown setCountry={handleSetCountry} /> */}

        <div className="mt-3">
          <label htmlFor="comment" className={FormStyles.Label}>
            Comment
          </label>
          <textarea
            name="comment"
            placeholder="Let me know when an opportunity like this comes up again!"
            value={donorForm.comment}
            onChange={handleChange}
            className="border rounded p-2 w-full outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>
    </>
  );
};

export default DonorForm;

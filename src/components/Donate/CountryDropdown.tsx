// import { Autocomplete } from "@mui/material";
// import React from "react";
// import { FormStyles } from "./DonorForm";

// const COUNTRIES = [
//   { label: "United States" },
//   { label: "Canada" },
//   { label: "United Kingdom" },
//   { label: "Afghanistan" },
//   { label: "Albania" },
//   { label: "Algeria" },
//   { label: "American Samoa" },
//   { label: "Andorra" },
//   { label: "Angola" },
//   { label: "Anguilla" },
//   { label: "Antarctica (the territory South of 60 deg S)" },
//   { label: "Antigua and Barbuda" },
//   { label: "Argentina" },
//   { label: "Armenia" },
//   { label: "Aruba" },
//   { label: "Australia" },
//   { label: "Austria" },
//   { label: "Azerbaijan" },
//   { label: "Bahamas" },
//   { label: "Bahrain" },
//   { label: "Bangladesh" },
//   { label: "Barbados" },
//   { label: "Belarus" },
//   { label: "Belgium" },
//   { label: "Belize" },
//   { label: "Benin (was Dahomey), People's Republic of" },
//   { label: "Bermuda" },
//   { label: "Bhutan" },
//   { label: "Bolivia" },
//   { label: "Bosnia and Herzegovina" },
//   { label: "Botswana" },
//   { label: "Bouvet Island (Bouvetoya)" },
//   { label: "Brazil" },
//   { label: "British Indian Ocean Territory (Chagos Archipelago)" },
//   { label: "British Virgin Islands" },
//   { label: "Brunei Darussalam" },
//   { label: "Bulgaria" },
//   { label: "Burkina Faso (formerly Upper Volta)" },
//   { label: "Burundi (formerly Urundi)" },
//   { label: "Cambodia" },
//   { label: "Cameroon" },
//   { label: "Cape Verde" },
//   { label: "Cayman Islands" },
//   { label: "Central African Republic" },
//   { label: "Chad" },
//   { label: "Chile" },
//   { label: "China" },
//   { label: "Christmas Island" },
//   { label: "Cocos (Keeling) Islands" },
//   { label: "Colombia" },
//   { label: "Comoros, Union of the" },
//   { label: "Congo, Democratic Republic of the" },
//   { label: "Congo, Republic of the" },
//   { label: "Cook Islands" },
//   { label: "Costa Rica" },
//   { label: "Cote D'Ivoire (formerly Ivory Coast)" },
//   { label: "Croatia (Hrvatska)" },
//   { label: "Cuba" },
//   { label: "Cyprus" },
//   { label: "Czech Republic" },
//   { label: "Denmark" },
//   { label: "Djibouti" },
//   { label: "Dominica" },
//   { label: "Dominican Republic" },
//   { label: "East Timor (Timor-Leste)" },
//   { label: "Ecuador" },
//   { label: "Egypt" },
//   { label: "El Salvador" },
//   { label: "Equatorial Guinea" },
//   { label: "Eritrea" },
//   { label: "Estonia" },
//   { label: "Ethiopia" },
//   { label: "Faroe Islands" },
//   { label: "Falkland Islands (Malvinas)" },
// ];

// type Props = {
//   setCountry: (country: string) => void;
// };

// const CountryDropdown = ({ setCountry }: Props) => {
//   return (
//     <div className="flex flex-col">
//       <label htmlFor="country" className={FormStyles.Label}>
//         Country
//       </label>
//       <Autocomplete
//         sx={{
//           display: "inline-block",
//           "& input": {
//             width: 200,
//             padding: "8px",
//             borderRadius: 1,
//             bgcolor: "background.paper",
//             border: "1px solid #e5e7eb",
//             outline: "none",
//             ":focus": {
//               borderColor: "#2563EB",
//             },
//             color: (theme) =>
//               theme.palette.getContrastText(theme.palette.background.paper),
//           },
//         }}
//         defaultValue={COUNTRIES[0]}
//         onChange={(event, value) => setCountry(value!.label)}
//         id="country-select-dropdown"
//         options={COUNTRIES}
//         renderInput={(params) => (
//           <div ref={params.InputProps.ref}>
//             <input type="text" {...params.inputProps} />
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default CountryDropdown;

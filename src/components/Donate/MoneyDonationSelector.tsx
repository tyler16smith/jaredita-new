import { useState } from "react";
import { donationAmounts } from "@/utils/data";
import { useDonateContext } from "./context/DonateProvider";

const MoneyDonationSelector = () => {
  const { donationState, setDonationState } = useDonateContext();
  const [customAmount, setCustomAmount] = useState("");

  const handleCustomAmount = (value: string) => {
    if (isNaN(parseInt(value))) return
    setCustomAmount(value);
    setDonationState({
      ...donationState,
      moneyDonationAmount: parseInt(value)
    });
  };

  return (
    <div className="flex justify-start items-center gap-2 mt-3 w-full md:w-[500px] overflow-x-scroll pb-2">
      {donationAmounts.map((amount: number) => (
        <p
          key={amount}
          onClick={() => setDonationState({ ...donationState, moneyDonationAmount: amount })}
          className={`px-4 py-2 rounded-lg border-2 ${donationState.moneyDonationAmount === amount
            ? "border-black"
            : "border-gray-300 text-gray-500"
            } hover:bg-gray-100 cursor-pointer`}
        >
          ${amount}
        </p>
      ))}
      {/* Custom amount */}
      <div className="flex justify-between items-center w-full text-gray-500">
        <div style={{ position: "relative", width: "100%" }}>
          <p
            className="text-sm p-1.5 pl-3.5"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 0,
            }}
          >
            $
          </p>
          <input
            type="text"
            name="customAmount"
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => handleCustomAmount(e.target.value)}
            className={`py-2 pl-6 pr-4 w-40 rounded-lg border-2 ${customAmount
              ? "border-black"
              : "border-gray-300 text-gray-500"
              } hover:bg-gray-100 cursor-pointer`}
          />
        </div>
      </div>
    </div>
  );
};

export default MoneyDonationSelector;

import { useState } from "react";
import { donationAmounts } from "@/utils/data";
import { useDonateContext } from "./context/DonateProvider";
import classNames from "classnames";
import { styles } from "./AddStudent/hooks/useAddStudentForm";

const MoneyDonationSelector = () => {
  const { donationState, setDonationState } = useDonateContext();
  const [customAmount, setCustomAmount] = useState("");
  const [selectedCustomAmount, setSelectedCustomAmount] = useState(false);

  const handleCustomAmount = (value: string) => {
    if (isNaN(parseInt(value))) {
      setCustomAmount("");
      setSelectedCustomAmount(false);
      return
    }
    setCustomAmount(value);
    setSelectedCustomAmount(true);
    setDonationState({
      ...donationState,
      moneyDonationAmount: parseInt(value)
    });
  };

  const handleSelectAmount = (amount: number) => {
    setSelectedCustomAmount(false);
    setDonationState({ ...donationState, moneyDonationAmount: amount })
  }

  return (
    <div className="flex flex-wrap justify-start items-center gap-2 mt-3 w-full md:w-[500px] pb-2">
      {donationAmounts.map((amount: number) => (
        <button
          key={amount}
          onClick={() => handleSelectAmount(amount)}
          className={classNames(
            'px-4 py-2 rounded-lg border-2 hover:bg-gray-100 cursor-pointer',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50', {
            'border-blue-500': donationState.moneyDonationAmount === amount && !selectedCustomAmount,
            'border-gray-300 text-gray-500': donationState.moneyDonationAmount !== amount || selectedCustomAmount
          },
          )}
        >
          ${amount}
        </button>
      ))}
      {/* Custom amount */}
      <div onClick={() => setSelectedCustomAmount(true)} className="flex justify-between items-center w-32 text-gray-500">
        <div style={{ position: "relative", width: "100%" }}>
          <span
            className="text-sm p-1.5 pl-3.5"
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: 0,
            }}
          >
            $
          </span>
          <input
            type="text"
            name="customAmount"
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => handleCustomAmount(e.target.value)}
            className={classNames(
              'py-2 pl-6 pr-4 w-44 rounded-lg border-2 border hover:bg-gray-100 cursor-pointer', {
              'border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50': customAmount !== "" || selectedCustomAmount,
              'border-gray-300 text-gray-500': customAmount === "" && !selectedCustomAmount
            }
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MoneyDonationSelector;

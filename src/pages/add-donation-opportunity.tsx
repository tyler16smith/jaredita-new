import React, { useState } from "react";
import Image from "next/image";

const AddDonationOpportunity = () => {
  const { handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    category: "",
    amount: "",
    frequency: "one-time payment",
    coverImage: "",
  });

  return (
    <div className="min-h-screen">
      {/* Donation Opportunities */}
      <div className="flex justify-center">
        <div className={`lg:max-w-[800px] w-full`}>
          <p className="text-xl font-bold mb-2">Add Donation Opportunity</p>
          <div className="mt-4">
            <Form formData={formData} setFormData={setFormData} />
            <UploadImage formData={formData} setFormData={setFormData} />
            <button
              onClick={() => handleSubmit(formData, setLoading)}
              className="flex justify-center items-center bg-blue-500 text-white rounded-md h-10 w-28 hover:bg-blue-600 mt-10"
            >
              {loading ? (
                <Image
                  src="/loading_spinner.gif"
                  alt="spinner"
                  width={26}
                  height={26}
                />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDonationOpportunity;

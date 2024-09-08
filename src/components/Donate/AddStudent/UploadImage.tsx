import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { supabase } from "@/lib/supabaseClient";
import { X } from "lucide-react";
import { styles } from "./hooks/useAddStudentForm";
import { type UseFormReturn } from "react-hook-form";

interface UploadImageProps {
  form: UseFormReturn<any>; // Use generic typing here if needed
}

const UploadImage: React.FC<UploadImageProps> = ({ form }) => {
  const [loading, setLoading] = useState(false);

  const handleUploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0] || null;
    if (!file) {
      setLoading(false);
      toast.error("Error uploading image. Please try again later.");
      return;
    }
    const fileExt = file.name.split(".").pop();
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;

    try {
      const { error } = await supabase.storage
        .from("images")
        .upload(fileName, file, {
          cacheControl: "3600",
          upsert: false,
          contentType: "image/png",
        });
      if (error) throw error;

      const publicURL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/images/${fileName}`;
      form.setValue("imageUrl", publicURL);
      setLoading(false);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const handleDeleteImage = async () => {
    const filePath = form.getValues("imageUrl").split("/").pop();
    try {
      const { error } = await supabase.storage
        .from("photos")
        .remove([`donation_opportunities/${filePath}`]);

      if (error) throw error;
    } catch (error) {
      console.error("Error deleting image: ", error);
    }
  };

  return (
    <div className="mb-4 w-full">
      <label className={styles.Label} aria-required="true">
        Photo
        <span className='text-red-500 pl-1'>*</span>
      </label>
      {loading ? (
        <div className="bg-gray-200 animate-pulse h-32 w-32 rounded-lg mt-2" />
      ) : (
        <>
          {form.getValues("imageUrl") ? (
            <div className="flex justify-start items-start w-32 h-32 relative mt-2">
              <Image
                src={form.getValues("imageUrl")}
                alt="cover image"
                width={300}
                height={300}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <X
                onClick={handleDeleteImage}
                className="absolute -mt-3 -mr-3 top-0 right-0 w-8 h-8 rounded-full text-gray-600 bg-white hover:text-black cursor-pointer"
              />
            </div>
          ) : (
            <div className="flex justify-center items-center bg-gray-100 border border-gray-300 rounded-md py-2 px-4 w-fit h-32">
              <div className="flex flex-col items-center space-y-1 text-center">
                <label
                  htmlFor="coverImage"
                  className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none w-full"
                >
                  <span>Upload a file</span>
                  <input
                    id="coverImage"
                    name="coverImage"
                    type="file"
                    className="sr-only"
                    onChange={handleUploadImage}
                  />
                </label>
                <p className="text-xs text-gray-500">PNG or JPG up to 2 KB</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UploadImage;

// useAddFamilyForm.ts hook
import { useState } from "react";
import { type UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { type TFamily } from "@/utils/types";
import { api } from "@/utils/api";
import { useRouter } from "next/router";
import { IMAGE_PLACEHOLDER } from "@/utils/data";

export type TSetLoading = (loading: boolean) => void;

export const useAddFamilyForm = () => {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const addFamily = api.families.addFamily.useMutation({
    onSuccess: () => {
      setAdded(true);
      toast.success("Family added successfully");
      router.push('/manage?select=families')
    },
    onError: (error) => {
      console.error("Error adding family: ", error);
      toast.error("Error adding family.")
    }
  })

  const isMobile = () => {
    if (typeof window === "undefined") return false;
    const isMobile = window.innerWidth < 768;
    return isMobile;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    form: UseFormReturn<any>
  ) => {
    e.preventDefault();

    // validate required fields
    if (
      !form.getValues("familyName") ||
      !form.getValues("fullAddress")
      // !form.getValues("imageUrl")
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

    const family: TFamily = {
      ...form.getValues(),
      imageUrl: form.getValues("imageUrl") ?? IMAGE_PLACEHOLDER, // TODO: remove after implementing image upload
    };
    
    addFamily.mutate(family);
  };

  return {
    added,
    isLoading: addFamily.isPending,
    isMobile,
    handleSubmit,
  };
};

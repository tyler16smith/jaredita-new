// useAddStudentForm.ts hook
import { useState } from "react";
import { api } from "@/utils/api";
import toast from "react-hot-toast";
import { type TStudent } from "@/utils/types";
import { type UseFormReturn } from "react-hook-form";
import { useRouter } from "next/router";

export const styles = {
  Label: "block text-sm font-medium text-gray-600 mt-2 mb-1",
  Input: "border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-50",
};

export type TSetLoading = (loading: boolean) => void;

export const useAddStudentForm = () => {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const addStudent = api.students.addStudent.useMutation({
    onSuccess: () => {
      setAdded(true);
      toast.success("Student added successfully");
      router.push('/manage-students')
    },
    onError: (error) => {
      console.error("Error adding student: ", error);
      toast.error("Error adding student.")
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
      !form.getValues("firstName") ||
      !form.getValues("age") ||
      !form.getValues("gender")
      // !form.getValues("imageUrl")
    ) {
      toast.error("Please fill out all required fields");
      return;
    }

    const student: TStudent = {
      ...form.getValues(),
      age: parseInt(form.getValues("age")),
      imageUrl: form.getValues("imageUrl") ?? 'image_placeholder', // TODO: remove after implementing image upload
    };

    debugger
    
    addStudent.mutate(student);
  };

  return {
    added,
    isLoading: addStudent.isPending,
    isMobile,
    handleSubmit,
  };
};

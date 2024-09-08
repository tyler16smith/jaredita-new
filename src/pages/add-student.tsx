import { useForm } from "react-hook-form";
import AddStudentForm from "@/components/Donate/AddStudent/Form";
import UploadImage from "@/components/Donate/AddStudent/UploadImage";
import { useAddStudentForm } from "@/components/Donate/AddStudent/hooks/useAddStudentForm";
import classNames from "classnames";
import SelectFamilyDropdown from "@/components/Donate/AddStudent/SelectFamilyDropdown";

const AddStudent = () => {
  const { handleSubmit, isLoading } = useAddStudentForm();
  const form = useForm()

  return (
    <div className="min-h-screen">
      {/* Donation Opportunities */}
      <div className="flex justify-center">
        <div className="w-full max-w-[470px]">
          <p className="text-xl font-bold mb-2">Add Student</p>
          <div className="mt-4">
            <form
              className="flex flex-col items-stretch gap-4"
              onSubmit={(e) => handleSubmit(e, form)}
            >
              <UploadImage form={form} />
              <AddStudentForm form={form} isLoading={isLoading} />
              <SelectFamilyDropdown form={form} />
              <button
                type="submit"
                disabled={isLoading}
                className={classNames(
                  "w-full bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md",
                  "focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300",
                  "focus:ring-opacity-50 transition-all duration-200 mt-5",
                )}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;

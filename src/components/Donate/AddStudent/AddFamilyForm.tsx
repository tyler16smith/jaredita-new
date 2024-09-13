import { ChevronDown } from "lucide-react";
import { styles } from "./hooks/useAddStudentForm";
import classNames from "classnames";
import { type UseFormReturn } from "react-hook-form";

const AddFamilyForm = ({
  form,
  isLoading
}: {
  form: UseFormReturn<any>;
  isLoading: boolean;
}) => {
  const { register } = form;

  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full">
        <div className="w-full">
          <label htmlFor="familyName" className={styles.Label} aria-required='true'>
            Family Name
            <span className='text-red-500 pl-1'>*</span>
          </label>
          <input
            autoFocus={true}
            type="text"
            id="familyName"
            {...register("familyName", { required: true })}
            placeholder="Ex: Smith"
            className={`${styles.Input} w-full`}
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className={styles.Label}>
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            placeholder="Ex: smith@gmail.com"
            className={`${styles.Input} w-full`}
          />
        </div>
      </div>

      <div className="flex justify-center items-start gap-5">
        <div className="w-full">
          <label htmlFor="fullAddress" className={styles.Label}>
            Full Address
            <span className='text-red-500 pl-1'>*</span>
          </label>
          <input
            type="text"
            id="fullAddress"
            {...register("fullAddress")}
            placeholder="Ex: Jalan Senopati 115, Kebayoran Baru, Jakarta Selatan, Jakarta 12190, Indonesia"
            className={`${styles.Input} w-full`}
          />
        </div>
      </div>
    </>
  );
};

export default AddFamilyForm;

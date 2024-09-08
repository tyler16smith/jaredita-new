import { ChevronDown } from "lucide-react";
import { styles } from "./hooks/useAddStudentForm";
import classNames from "classnames";
import { type UseFormReturn } from "react-hook-form";

const AddStudentForm = ({
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
          <label htmlFor="firstName" className={styles.Label} aria-required='true'>
            First Name
            <span className='text-red-500 pl-1'>*</span>
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: true })}
            placeholder="Ex: Tyler"
            className={`${styles.Input} w-full`}
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className={styles.Label}>
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName")}
            placeholder="Ex: Smith"
            className={`${styles.Input} w-full`}
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 w-full">
        <div className="w-full">
          <label htmlFor="gender" className={styles.Label} aria-required='true'>
            Gender
            <span className='text-red-500 pl-1'>*</span>
          </label>
          <div className="relative w-full">
            <select
              id="gender"
              {...register("gender", { required: true })}
              className={classNames(
                "block appearance-none w-full bg-white border border-gray-300 rounded-md",
                "py-2.5 pl-4 pr-10 leading-tight focus:outline-none focus:border-blue-500",
                "focus:ring focus:ring-blue-300 focus:ring-opacity-50",
              )}
            >
              <option value="">Select One</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="age" className={styles.Label} aria-required='true'>
            Age
            <span className='text-red-500 pl-1'>*</span>
          </label>
          <input
            type="number"
            id="age"
            {...register("age", { required: true })}
            placeholder="Ex: 15"
            className={`${styles.Input} w-full`}
          />
        </div>
      </div>

      <div className="flex justify-center items-start gap-5">
        <div className="w-full">
          <label htmlFor="fullAddress" className={styles.Label}>
            Full Address
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

      <div>
        <label htmlFor="email" className={styles.Label}>
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          placeholder="Ex: tylersmith@gmail.com"
          className={`${styles.Input} w-full`}
        />
      </div>
    </>
  );
};

export default AddStudentForm;

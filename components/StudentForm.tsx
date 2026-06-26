'use client';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema, GRADES, type StudentFormData } from "@/data/schema";
import FormField from "@/components/FormField";

type StudentFormProps = {
  onAdd: (data: StudentFormData) => void;
};

const inputClass =
  "rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-800 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500";

const StudentForm = ({ onAdd }: StudentFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
    defaultValues: { fullName: "", dob: "" },
  });

  const onSubmit = (data: StudentFormData) => {
    onAdd(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto max-w-md flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm text-left"
    >
      <FormField label="Full Name" required error={errors.fullName?.message}>
        <input type="text" placeholder="Jane Smith" className={inputClass} {...register("fullName")} />
      </FormField>

      <FormField label="Date of Birth" required error={errors.dob?.message}>
        <input type="date" className={inputClass} {...register("dob")} />
      </FormField>

      <FormField label="Current Grade" required error={errors.studentGrade?.message}>
        <select defaultValue="" className={inputClass} {...register("studentGrade")}>
          <option value="" disabled>
            Select a grade
          </option>
          {GRADES.map((g) => (
            <option key={g} value={g}>
              {g}
            </option>
          ))}
        </select>
      </FormField>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-sky-600 py-2.5 text-sm font-semibold text-white hover:bg-sky-700 disabled:opacity-60"
      >
        Add Student
      </button>
    </form>
  );
};

export default StudentForm;

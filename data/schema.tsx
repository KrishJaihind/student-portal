import { z } from "zod";

export const GRADES = ["A+", "A", "B+", "B", "C+", "C", "D", "F"] as const;

export const studentSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter at least 2 characters"),
  dob: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Format: YYYY-MM-DD")
    .refine((v) => !Number.isNaN(Date.parse(v)), "Please enter a real date")
    .refine((v) => new Date(v) <= new Date(), "Date of birth can't be in the future"),
  studentGrade: z.enum(GRADES, { message: "Please choose a grade" }),
});

export type StudentFormData = z.infer<typeof studentSchema>;

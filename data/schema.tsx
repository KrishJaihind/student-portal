import { z } from "zod";

export const registerationSchema = z.object({
  // Step 1 Fields
  fullName: z.string().min(2, "Please enter minimum 2 characters"),
  dob: z.string().min(10, "Format: YYYY-MM-DD"),
  studentGrade: z.string().min(1, "Please choose a grade ex. A+"),
    
  
});

export type RegisterationData = z.infer<typeof registerationSchema>;

export const step1Fields = ["fullName", "dob", "studentGrade"] as const;
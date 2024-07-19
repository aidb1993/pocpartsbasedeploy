import * as z from "zod";

export const DemoFormSchema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  industryClass: z.enum(["Airline", "MRO", "US Defense Contractor", "Other"]),
});

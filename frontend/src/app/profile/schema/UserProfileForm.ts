import * as z from "zod"
import { infer as zodInfer } from "zod";

const UserInformation = z.object({
    fullname: z.string().max(30, {message: "Name is too long, please use a shorter name"}).optional(),
    email: z.string().optional(),
    contactNo: z.string().optional(),
    skills: z.string().optional(),
    experience: z.boolean().optional(),
    experienceMonths: z.int().min(0, {message: "Please enter valid experience duration"}).optional(),
    jobsTargetting: z.string().optional(),
})

export const UserInformationSchema = UserInformation;
export type UserInformationType = zodInfer<typeof UserInformation>;
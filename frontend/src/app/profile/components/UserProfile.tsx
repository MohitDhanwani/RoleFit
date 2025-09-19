"use client";
import { Form, FormBoolean, FormInput, FormTextArea, Button, Card, CardDescription } from "@/components/ui";
import { useForm } from "react-hook-form";
import { UserInformationSchema, UserInformationType } from "../schema/UserProfileForm";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "@clerk/nextjs";
import axios from "axios"
import { useEffect } from "react";

export default function UserProfile() {
  const { user } = useUser();

  const form = useForm<UserInformationType>({
    resolver: zodResolver(UserInformationSchema),
    defaultValues: {
      fullname: user?.fullName ?? "",
      email: user?.emailAddresses[0].emailAddress ?? "",
      contactNo: undefined,
      skills: undefined,
      experience: false,
      experienceMonths: 0,
      jobsTargetting: undefined,
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (document.activeElement && document.activeElement instanceof HTMLInputElement) {
        document.activeElement.blur();
      }
      if (window.getSelection) {
        window.getSelection()?.removeAllRanges();
      }
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  async function handleUserProfileCreation(values: UserInformationType) {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/create`, values)
      .then((res) => console.log(res))
      .catch((e) => console.error("Error in sending request to create user"));

      console.log("json", response);

    } catch (error) {
      console.error("Error", error);
    }
  }

  const hasExperience = form.watch("experience");

  return (
    <div className="flex justify-center bg-[#f4f7fd]">
      <Card className="w-full max-w-2xl shadow-lg border border-indigo-100 bg-white/90 backdrop-blur-sm">
        <CardDescription className="p-8">
          <h2 className="text-3xl font-bold text-black mb-6">Tell Us About Yourself</h2>
          <p className="text-lg text-slate-600 mb-8">Fill out your profile so our AI can find the best job matches for you.</p>

          <Form {...form}>
            <form className="flex flex-col gap-6 text-black" onSubmit={form.handleSubmit(handleUserProfileCreation)}>
              <FormInput label="Full Name" name="fullname" form={form} required autoFocus={false} />
              <FormInput label="Email" name="email" form={form} required />
              <FormInput label="Contact Number" name="contactNo" form={form} />
              <FormTextArea label="Skills" name="skills" form={form} placeholder="Enter Top 5 skills eg: Javascript, Typescript, Nodejs" />
              <FormBoolean label="Professional Experience" name="experience" form={form} />

              {hasExperience && <FormInput label="Total Months of Experience" name="experienceMonths" form={form} type="number" />}

              <FormTextArea label="Jobs Targeting" name="jobsTargetting" form={form} placeholder="Enter all relevant jobs you are targeting" />

              <div className="flex justify-end pt-4">
                <Button variant="primary" className="px-6 py-2">
                  Save Profile
                </Button>
              </div>
            </form>
          </Form>
        </CardDescription>
      </Card>
    </div>
  );
}

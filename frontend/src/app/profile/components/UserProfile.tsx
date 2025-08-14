"use client";
import { Form, FormBoolean, FormInput, FormTextArea } from "@/components/ui";
import { useForm } from "react-hook-form";
import { UserInformationSchema, UserInformationType } from "../schema/UserProfile";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function UserProfile() {
  const form = useForm<UserInformationType>({
    resolver: zodResolver(UserInformationSchema),
  });

  const hasExperience = form.watch("experience");

  return (
    <div className="flex justify-center bg-[#f4f7fd]">
      <Card className="w-full max-w-2xl shadow-lg border border-indigo-100 bg-white/90 backdrop-blur-sm">
        <CardDescription className="p-8">

          <h2 className="text-3xl font-bold text-black mb-6">
            Tell Us About Yourself
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Fill out your profile so our AI can find the best job matches for you.
          </p>

          <Form {...form}>
            <form className="flex flex-col gap-6">
              <FormInput label="Full Name" name="fullname" form={form} required />
              <FormInput label="Email" name="email" form={form} required />
              <FormInput label="Contact Number" name="contactNo" form={form} />
              <FormTextArea
                label="Skills"
                name="skills"
                form={form}
                helpText="Enter top 5 skills you know"
              />
              <FormBoolean label="Professional Experience" name="experience" form={form} />

              {hasExperience && (
                <FormInput
                  label="Total Months of Experience"
                  name="experienceMonths"
                  form={form}
                />
              )}

              <FormTextArea
                label="Jobs Targeting"
                name="jobsTargetting"
                form={form}
                helpText="Enter all relevant jobs you are targeting"
              />

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

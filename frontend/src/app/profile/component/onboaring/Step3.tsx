"use client";
import { Checkbox, Input, Label } from "@/components/ui";
import { Clock } from "lucide-react";
import { useState } from "react";

interface UserExperienceInfo {
  hasExperience: boolean;
  totalYearsOfExperience: number;
  previousJobRoles: string[];
}

interface Props {
  data: UserExperienceInfo;
  setUserDetails: (details: UserExperienceInfo) => void;
}

export default function Step3({ data, setUserDetails }: Props) {
  const [hasExperience, setHasExperience] = useState(false);

  const handleExperienceChange = (value: boolean) => {
    setHasExperience(value);
    setUserDetails({
      ...data,
      hasExperience: value,
      ...(value == false && {
        totalYearsOfExperience: 0,
        previousJobRoles: [],
      }),
    });
  };

  return (
    <div className="pt-16">
      <div className="flex gap-3">
        <div className="p-2 bg-indigo-100 flex justify-center items-center rounded-lg">
          <Clock color="blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Experience Level</h1>
          <h3 className="text-slate-600">Tell us about your professional background</h3>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-6 mt-10">
        <h1 className="text-lg font-medium text-slate-900 mb-4">Do you have professional experience in your target field?</h1>
        <div className="flex gap-8">
          <div className="flex gap-3 border-2 border-slate-200 p-4 rounded-lg">
            <Checkbox id="yes-experience" className="w-6 h-6 border-slate-400 border-2" onCheckedChange={() => handleExperienceChange(true)} />
            <Label className="font-medium ">Yes, I have Experience</Label>
          </div>
          <div className="flex gap-3 border-2 border-slate-200 p-4 rounded-lg">
            <Checkbox id="no-experience" className="w-6 h-6 border-slate-400 border-2" onCheckedChange={() => handleExperienceChange(false)} />
            <Label className="font-medium">No, I am just starting</Label>
          </div>
        </div>
      </div>

      {hasExperience && (
        <div className="mt-10">
          <Label className="font-semibold text-slate-700 mb-4 text-lg">Previous Job Postions</Label>
          <Input
            placeholder="Eg Frontend Developer, Software Engineer etc...."
            className="border border-slate-400 mb-4 p-4"
            onChange={(e) =>
              setUserDetails({
                ...data,
                previousJobRoles: e.target.value.split(",").map((role) => role.trim()),
              })
            }
          />

          <Label className="font-semibold text-slate-700 mb-4 text-lg">Total Years of Experience</Label>
          <Input
            placeholder="Eg 24"
            className="border border-slate-400 p-4"
            onChange={(e) =>
              setUserDetails({
                ...data,
                totalYearsOfExperience: Number(e.target.value),
              })
            }
          />
        </div>
      )}
    </div>
  );
}

"use client";
import { useState } from "react";
import Step1 from "./onboaring/Step1";
import Step2 from "./onboaring/Step2";
import Step3 from "./onboaring/Step3";
import Step4 from "./onboaring/Step4";
import { Button } from "@/components/ui";

interface UserDetailsType {
  name: string;
  email: string;
  contactNo: string;
  jobProfilesTargetting: string[];
  hasExperience: boolean;
  totalYearsOfExperience: number;
  previousJobRoles: string[];
  skills: string[];
}

export default function OnboardingForm() {
  const [userDetails, setUserDetails] = useState<UserDetailsType>({
    name: "",
    email: "",
    contactNo: "",
    jobProfilesTargetting: [],
    hasExperience: false,
    totalYearsOfExperience: 0,
    previousJobRoles: [],
    skills: [],
  });

  const handleClcick = () => {
    console.log(userDetails);
  };

  return (
    <div>
      <div className="border border-slate-200 shadow-sm p-8 pt-10 pb-10 rounded-lg relative">
        <div className="absolute w-full h-1 rounded-t-lg top-0 left-0 bg-slate-200">
          <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg transition-all duration-300"></div>
        </div>
        <Step1
          data={{ name: userDetails.name, email: userDetails.email, contactNo: userDetails.contactNo }}
          setUserDetails={(details) =>
            setUserDetails((prev) => ({
              ...prev,
              ...details,
            }))
          }
        />{" "}
        <Step2
          data={{ skills: userDetails.skills, jobProfilesTargetting: userDetails.jobProfilesTargetting }}
          setUserDetails={(details) =>
            setUserDetails((prev) => ({
              ...prev,
              ...details,
            }))
          }
        />{" "}
        <Step3
          data={{
            hasExperience: userDetails.hasExperience,
            previousJobRoles: userDetails.previousJobRoles,
            totalYearsOfExperience: userDetails.totalYearsOfExperience,
          }}
          setUserDetails={(details) =>
            setUserDetails((prev) => ({
              ...prev,
              ...details,
            }))
          }
        />{" "}
        <Step4 /> {/*This part is for resume but will handle it later* */}
        <div className="pt-10 pb-4 w-full flex justify-end">
          <Button variant={"primary"} className="px-8 bg-gradient-to-r from-indigo-600 to-purple-600" onClick={handleClcick}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

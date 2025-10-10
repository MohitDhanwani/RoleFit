import { FormInput, Input, Label } from "@/components/ui";
import { ComboboxDemo } from "@/components/ui/combobox";
import { Briefcase, MapPin } from "lucide-react";

const jobProfiles = [
  // --- Development & Engineering ---
  { value: "frontend-developer", label: "Frontend Developer" },
  { value: "backend-developer", label: "Backend Developer" },
  { value: "fullstack-developer", label: "Full Stack Developer" },
  { value: "software-engineer", label: "Software Engineer" },
  { value: "mobile-app-developer", label: "Mobile App Developer" },
  { value: "web3-developer", label: "Web3 Developer" },
  { value: "blockchain-developer", label: "Blockchain Developer" },
  { value: "devops-engineer", label: "DevOps Engineer" },
  { value: "data-engineer", label: "Data Engineer" },
  { value: "ai-ml-engineer", label: "AI / ML Engineer" },

  // --- Product & Management ---
  { value: "product-manager", label: "Product Manager" },
  { value: "project-manager", label: "Project Manager" },
  { value: "product-designer", label: "Product Designer" },
  { value: "business-analyst", label: "Business Analyst" },
  { value: "qa-engineer", label: "QA Engineer" },

  // --- Creative & Content ---
  { value: "ui-ux-designer", label: "UI/UX Designer" },
  { value: "graphic-designer", label: "Graphic Designer" },
  { value: "video-editor", label: "Video Editor" },
  { value: "motion-graphics-artist", label: "Motion Graphics Artist" },
  { value: "content-writer", label: "Content Writer" },
  { value: "copywriter", label: "Copywriter" },

  // --- Marketing & Growth ---
  { value: "digital-marketer", label: "Digital Marketer" },
  { value: "seo-specialist", label: "SEO Specialist" },
  { value: "social-media-manager", label: "Social Media Manager" },

  // --- Data & Research ---
  { value: "data-scientist", label: "Data Scientist" },
  { value: "data-analyst", label: "Data Analyst" },
  { value: "research-analyst", label: "Research Analyst" },

  // --- Operations & Support ---
  { value: "customer-support", label: "Customer Support" },
  { value: "operations-manager", label: "Operations Manager" },
  { value: "hr-manager", label: "HR Manager" },
  { value: "talent-acquisition", label: "Talent Acquisition Specialist" },
];

const jobTypes = [
  { value: "full-time", label: "Full-Time" },
  { value: "part-time", label: "Part-Time" },
  { value: "contract", label: "Contract" },
  { value: "internship", label: "Internship" },
  { value: "freelance", label: "Freelance" },
];

const availabilityOptions = [
  { value: "immediate", label: "Immediate" },
  { value: "within-2-weeks", label: "Within 2 Weeks" },
  { value: "within-1-month", label: "Within 1 Month" },
  { value: "flexible", label: "Flexible" },
  { value: "negotiable", label: "Negotiable" },
];


export default function Step2() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="p-2 rounded-lg bg-indigo-100 flex justify-center items-center">
          <Briefcase color="blue"/>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Career Profile & Preferences</h1>
          <h3 className="text-slate-600">Tell us about your career goals and job preferences.</h3>
        </div>
      </div>

      <div className="w-full pt-4">
        <div>
          <h1 className="text-sm font-semibold text-slate-700 mb-2">Job Profiles You're Targetting</h1>
          <ComboboxDemo data={jobProfiles}/>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
            <MapPin color="blue"/>
            <h1 className="text-lg font-semibold text-slate-900">Job Preferences</h1>
        </div>

        <div className="flex w-full justify-between items-center gap-4 pt-4">
          <div className="mb-3 flex flex-col gap-2 w-full">
            <Label>Preferred Location</Label>
            <Input name="Prefered Location" placeholder="Eg: London, India, USA, Dubai "/>
        </div>

        <div className="mb-3 flex flex-col gap-2 w-full">
            <Label>Expected Salary Range</Label>
            <ComboboxDemo data={jobProfiles}/>
        </div>
        </div>

        <div className="flex w-full justify-between items-center gap-4 pt-4">
          <div className="mb-3 flex flex-col gap-2 w-full">
            <Label>Job Type</Label>
            <ComboboxDemo data={jobProfiles}/>
        </div>

          <div className="mb-3 flex flex-col gap-2 w-full">
            <Label>Availability</Label>
            <ComboboxDemo data={jobProfiles}/>
        </div>
        </div>
      </div>
    </div>
  );
}

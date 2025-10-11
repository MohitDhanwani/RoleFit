import { ComboboxDemo } from "@/components/ui/combobox";
import { Briefcase } from "lucide-react";

export interface UserPreferenceInfo {
  skills: string[];
  jobProfilesTargetting: string[];
}

interface Props {
  data: UserPreferenceInfo;
  setUserDetails: (details: Partial<UserPreferenceInfo>) => void;
}

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

export default function Step2({ data, setUserDetails }: Props) {
  return (
    <div className="flex flex-col gap-4 pt-16">
      <div className="flex gap-3">
        <div className="p-2 rounded-lg bg-indigo-100 flex justify-center items-center">
          <Briefcase color="blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Career Profile & Preferences</h1>
          <h3 className="text-slate-600">Tell us about your career goals and job preferences.</h3>
        </div>
      </div>

      <div className="w-full pt-4 flex flex-col gap-4">
        <div>
          <h1 className="text-sm font-semibold text-slate-700 mb-2">Job Profiles You're Targetting</h1>
          <ComboboxDemo
            data={jobProfiles}
            label="Select Job Profile"
            placeholder="Select Job Profile..."
            field="jobProfilesTargetting"
            selectedValues={data.jobProfilesTargetting}
            setUserDetails={setUserDetails}
          />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-slate-700 mb-2">Skills</h1>
          <ComboboxDemo
            data={jobProfiles}
            label="Select all the Skills"
            placeholder="Select all the Skills..."
            field="skills"
            selectedValues={data.skills}
            setUserDetails={setUserDetails}
          />
        </div>
      </div>
    </div>
  );
}

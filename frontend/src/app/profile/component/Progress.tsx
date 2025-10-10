import { Briefcase, Clock, LucideIcon, User, File, Car } from "lucide-react";

interface ProgressDataType {
    icon: LucideIcon,
    heading: string,
}

const ProgressData : ProgressDataType[] = [
    {
        icon: User,
        heading: "Personal Info",
    },
    {
        icon: Briefcase,
        heading: "Profile & Preferences",
    },
    {
        icon: Clock,
        heading: "Experience",
    },
    {
        icon: File,
        heading: "Resume",
    },
]

export default function SetupProgress() {
  return (
    <div className="w-64">
        <div className="flex flex-col justify-center rounded-xl border border-slate-200 shadow-sm p-6">
        <h1 className="font-semibold text-slate-900 mb-3">Setup Progress</h1>
        <div>

          {ProgressData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center mb-2">
                <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex justify-center items-center p-2 mr-2">
                  <Icon />
                </div>
                <span className="text-sm font-medium text-slate-900">{item.heading}</span>
              </div>
            );
          })}
        </div>
        </div>
    </div>
  );
}

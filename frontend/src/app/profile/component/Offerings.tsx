import { CheckCircle, LucideIcon } from "lucide-react";

interface BenefitDataType {
  icon: LucideIcon;
  heading: string;
}

const BenefitData: BenefitDataType[] = [
  {
    icon: CheckCircle,
    heading: "AI-powered job matching scores",
  },
  {
    icon: CheckCircle,
    heading: "Resume vs job description analysis",
  },
  {
    icon: CheckCircle,
    heading: "Custom outreach Email & LinkedIn templates",
  },
];

export default function WhatYouWillGet() {
  return (
    <div className="rounded-xl border border-slate-200 shadow-sm bg-gradient-to-br from-indigo-50 to-purple-50 w-64 p-6 flex justify-center flex-col mt-8">
      <h1 className="font-semibold text-slate-900 mb-2">What You'll Get</h1>
      <div>
        {BenefitData.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.heading} className="flex gap-2 mb-2">
              <Icon color="green"/>
              <span className="text-sm text-slate-700">{item.heading}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { UserCheck, Search, Zap, Send, LucideIcon, Sparkle } from "lucide-react";
import { Card } from "./ui";

interface Card {
  icon: LucideIcon;
  heading: string;
  description: string;
  iconColor: string;
}

const CardMetaData: Card[] = [
  {
    icon: UserCheck,
    heading: "Build Your Profile",
    description: "Create your professional profile with skills, experience, and career preferences to get personalized job recommendations.",
    iconColor: "from-indigo-500 to-purple-500",
  },
  {
    icon: Search,
    heading: "Browse Daily Job Postings",
    description: "Access fresh job opportunities daily from top companies. Analyze how your resume matches with job descriptions.",
    iconColor: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    heading: "AI-Powered Analysis",
    description: "Use our AI agent to find the best jobs for you and get detailed resume analysis against job requirements.",
    iconColor: "from-amber-500 to-orange-500",
  },
  {
    icon: Send,
    heading: "Custom Outreach Tools",
    description: "Create personalized cold emails and LinkedIn messages for HR and employees. Get referrals and stand out.",
    iconColor: "from-rose-500 to-pink-500",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-slate-50/50 max-w-full w-full flex flex-col justify-center items-center pt-28">
      {/*Heading and description* */}
      <div className="max-w-3xl flex justify-center items-center flex-col">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-full px-4 py-2 flex">
          <Sparkle className="mr-2" size={20}/><span className="text-sm font-semibold"> How it works</span>
        </div>

        <div className="font-bold text-slate-900 text-5xl pt-6">
          From Profile to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Dream Job</span>
        </div>

        <div>
          <h3 className="text-slate-600 max-w-2xl text-center text-lg pt-5">
            Advanced job board with AI-powered analysis, resume matching, and personalized outreach tools to accelerate your job search success.
          </h3>
        </div>
      </div>

      {/*Cards* */}
      <div className="flex flex-wrap justify-center items-stretch gap-24 pt-12">
        {CardMetaData.map((card: Card, index: number) => {
          const Icon = card.icon;
          return (
            <div key={index}>
              <Card
                key={index}
                className="bg-white-50 backdrop-blur-sm border border-white-50 max-w-60 h-96 flex flex-col items-center text-center p-4 shadow-sm border-none transform transition-all hover:-translate-y-2 duration-300 cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-200 font-bold text-slate-700 flex items-center justify-center -top-4 absolute">{index}</div>
                <div className="mt-8">
                  <Icon className={`p-4 shadow-lg rounded-xl bg-gradient-to-r ${card.iconColor}`} size={68} color="white" />
                </div>

                <div className="text-xl font-semibold text-slate-900">{card.heading}</div>

                <div className="text-slate-600">{card.description}</div>
              </Card>
            </div>
          );
        })}
      </div>

      <div className="pt-16">
        <span className="text-slate-600 pr-2">
          Ready to get started? <span className="font-semibold text-indigo-600">Join 50,000+ job seekers</span>
        </span>
      </div>
    </div>
  );
}

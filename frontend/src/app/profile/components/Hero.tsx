import { Button } from "@/components/ui/button";
import { Upload, Search, Percent, LucideIcon, User, Pointer } from "lucide-react";

interface UserCycle {
  icon: LucideIcon;
  heading: string;
}

export default function Hero() {
  const FeatureCycle: UserCycle[] = [
    {
      icon: Upload,
      heading: "Upload Profile",
    },
    {
      icon: Search,
      heading: "We Search",
    },
    {
      icon: Percent,
      heading: "Get Matched",
    },
    {
      icon: Pointer,
      heading: "Automate & Apply",
    },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center items-center bg-[#f4f7fd] pt-18 pb-18 p-20 min-h-screen">
      <div className="flex flex-col gap-8 items-center justify-center max-w-4xl">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">
          Tell Us About Yourself
        </div>

        <div>
          <span className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
            We'll analyze your profile and connect you with opportunities that align with your career goals.
          </span>
        </div>

        <div className="w-full bg-slate-200 h-0.5 mt-2"></div>

        <div className="flex w-full justify-evenly pt-4">
          {FeatureCycle.map((items, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <span className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                <items.icon color="purple" />
              </span>
                <h1 className="text-xl font-bold text-slate-900 pt-2">{items.heading}</h1> 
            </div>
          ))}
        </div>
      </div>


      <div className="w-full max-w-xl flex justify-evenly pt-10">
        <Button variant={"primary"} className="p-6 px-10 w-1/3">
            <User/>
            My Profile
            </Button>
      </div>

      
    </div>
  );
}

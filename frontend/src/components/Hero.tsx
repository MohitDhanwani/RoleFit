import { Sparkle, ArrowRight, Play, Sparkles, TrendingUp, Users, LucideIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardDescription } from "./ui/card";

interface AboutPlatform {
  icon: LucideIcon;
  heading: string;
  description: string;
}

export default function Hero() {
  const AboutPlatform: AboutPlatform[] = [
    {
      icon: Users,
      heading: "50K+",
      description: "Total Users",
    },
    {
      icon: TrendingUp,
      heading: "94%",
      description: "Match Success Rate",
    },
    {
      icon: Sparkles,
      heading: "2.3x",
      description: "Faster Applications",
    },
  ];

  return (
    <div className="flex gap-8 justify-evenly items-center bg-[#f4f7fd] pt-16 pb-16 p-20 h-full">

      <div className="flex flex-col gap-6 items-start justify-center max-w-xl">
        <div className="flex justify-center items-center rounded-full bg-white/60 gap-2 border border-indigo-200/50 text-indigo-700 font-semibold px-4 py-2 pb-4">
          <Sparkle color="purple" className="h-5 w-5"/>
          <span className="text-sm">AI-Powered Job Matching</span>
        </div>

        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight flex flex-col -space-y-4">
          <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900 bg-clip-text text-transparent">Find Your Perfect</span>
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Role in Seconds</span>
        </div>

        <div>
          <span className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
            RoleFit's AI analyzes your profile and auto-matches you to dream jobs. Get 75%+ matches with instant application assistance and referral
            connections.
          </span>
        </div>

        <div className="flex gap-8 items-center">
          <Button variant={"primary"} className="cursor-pointer p-5 font-semibold px-2">
            Start Matching Jobs
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button className="bg-white cursor-pointer p-5 px-2 font-semibold text-slate-700 hover:bg-slate-50 border border-slate-300">
            <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Video
          </Button>
        </div>

        <div className="flex w-full justify-evenly pt-6">
          {AboutPlatform.map((items, index) => (
            <div key={index} className="flex flex-col justify-center items-center">
              <span className="p-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-lg">
                <items.icon color="purple" />
              </span>
              <h1 className="text-2xl font-bold text-slate-900 pt-2">{items.heading}</h1>
              <h2 className="text-sm text-slate-600">{items.description}</h2>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-xl">
        <Card>
          <CardDescription>
            <div className="p-6 flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex gap-4 justify-evenly">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">94%</span>
                  </div>

                  <div>
                    <div className="text-sm font-semibold text-slate-900">Perfect Match Found!</div>
                    <div className="text-xs text-slate-600">Senior Frontend Developer</div>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col">
                  <h1 className="text-lg font-bold text-slate-900">$145k</h1>
                  <div className="text-xs text-slate-600">Remote</div>
                </div>
              </div>

              <div className="flex flex-col justify-between items-center gap-1.5">
                <div className="flex justify-between w-full">
                  <span className="text-slate-600">Skills Match</span>
                  <span className="font-semibold text-emerald-600">9/10</span>
                </div>

                <div className="w-full border border-s-slate-200 rounded-full">
                  <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 h-2 rounded-full w-[90%]">
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">React</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">Typescript</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">Node.js</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 rounded-md text-xs font-semibold">AWS</span>
              </div>

              <div className="flex justify-evenly pt-4">
                <Button variant={"primary"} className="w-2/5">
                  Apply now
                </Button>
                <Button className="w-2/5" variant={"base"}>
                  Get Referral
                </Button>
              </div>
            </div>
          </CardDescription>
        </Card>
      </div>
    </div>
  );
}

import { Zap } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

interface NavigationItemsProps {
  name: string;
  url: string;
}

export default function Navbar() {
  const navigationItems: NavigationItemsProps[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Features",
      url: "/features",
    },
    {
      name: "Jobs",
      url: "/jobs",
    },
    {
      name: "Pricing",
      url: "/pricing",
    },
  ];

  return (
    <div>
      <div className="flex justify-evenly items-center h-16 top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-300">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl group-hover:from-indigo-700 group-hover:to-purple-700 transition-colors">
            <Zap color="white" className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">RoleFit</span>
        </div>

        <div className="flex justify-between gap-8">
          {navigationItems.map((item, index) => (
            <Link href={item.url} key={index} className="text-sm font-semibold transition-colors hover:text-indigo-600 text-slate-700">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <span>Sign In</span>
          <Button variant={"primary"}>Get Started</Button>
        </div>
      </div>
    </div>
  );
}

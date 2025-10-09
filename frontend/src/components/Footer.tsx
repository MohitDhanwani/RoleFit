import { Zap } from "lucide-react";

interface FooterSections {
  heading: string;
  item1: string;
  item2: string;
  item3: string;
}

const FooterMetaData: FooterSections[] = [
  {
    heading: "Product",
    item1: "How it works",
    item2: "Success Stories",
    item3: "Pricing",
  },
  {
    heading: "Resources",
    item1: "Blog",
    item2: "Career Tips",
    item3: "Resume Builder",
  },
  {
    heading: "Company",
    item1: "About",
    item2: "Partners",
    item3: "Contact Us",
  },
  {
    heading: "Terms",
    item1: "Privacy Policy",
    item2: "Terms of Service",
    item3: "Cookie Policy",
  },
];

export default function Footer() {
  return (
    <div className="bg-slate-900 text-white w-full max-w-full p-10">
      <div className="flex justify-around pt-10 pb-10">
        {/*Company and description */}
        <div className="flex justify-center flex-col max-w-lg gap-2.5">
          <div className="flex gap-3 items-center">
            <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-xl p-2 w-10">
              <Zap />
            </div>
            <span className="text-2xl font-bold">RoleFit</span>
          </div>

          <div className="text-slate-400">
            AI-powered job matching platform that connects talented professionals with their perfect career opportunities.
          </div>
        </div>

        <div className="flex gap-20">
          {FooterMetaData.map((item: FooterSections, index: number) => (
            <div key={index}>
              <h1 className="text-white font-semibold pb-3">{item.heading}</h1>
              <div className="text-slate-400 text-sm transition-colors flex flex-col gap-3">
                <div className=" hover:text-white hover:cursor-pointer">{item.item1}</div>
                <div className=" hover:text-white hover:cursor-pointer">{item.item2}</div>
                <div className=" hover:text-white hover:cursor-pointer">{item.item3}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

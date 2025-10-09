import { LucideIcon, User, User2, UserIcon, Star, Quote, Car } from "lucide-react";
import { Card } from "./ui";

interface TestimonialCard {
  userProfile: LucideIcon;
  testimonial: string;
  rating: number;
  author: string;
  designation: string;
  company: string;
}

interface statistics {
    stats: string,
    description: string,
}
const TestimonialMetaData: TestimonialCard[] = [
  {
    userProfile: User,
    testimonial: "RoleFit found me the perfect role at Google in just 2 weeks. The match accuracy was incredible - 96% compatibility!",
    rating: 5,
    author: "Sarah Chen",
    designation: "Senior Software Engineer",
    company: "Google",
  },
  {
    userProfile: User2,
    testimonial: "The automated application feature saved me 20+ hours per week. Got 3 interviews in my first month.",
    rating: 5,
    author: "Marcus Rodriguez",
    designation: "Product Manager",
    company: "Stripe",
  },
  {
    userProfile: UserIcon,
    testimonial: "Amazing platform! The referral connections helped me land my dream job at Airbnb. Highly recommend!",
    rating: 5,
    author: "Emily Watson",
    designation: "UI/UX Designer",
    company: "Airbnb",
  },
];

const CompanyMetaData: string[] = ["Google", "Microsoft", "Apple", "Meta", "Netflix", "Spotify"];

const StatisticsMetaData: statistics[] = [
    {
        stats: "50K+",
        description: "Active Users",
    },
    {
        stats: "94%",
        description: "Success Rate",
    },
    {
        stats: "2.3x",
        description: "Faster Applications",
    },
    {
        stats: "500+",
        description: "Partner Companies",
    }
]

export default function Testimonials() {
  return (
    <div className="max-w-full w-full bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 pt-20 flex flex-col justify-center items-center pb-20">
      {/*Heading and description* */}
      <div className="text-center">
        <div className="text-5xl font-bold text-slate-900 pb-6">
          Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Top Professionals</span>
        </div>

        <div className="text-lg text-slate-600 w-full max-w-2xl">
          Join thousands of successful professionals who found their dream jobs through RoleFit's intelligent matching platform.
        </div>
      </div>

      {/*Testimonials card* */}
      <div className="max-w-full w-full flex justify-center items-center gap-24 pt-16">
        {TestimonialMetaData.map((testimonial: TestimonialCard, index: number) => {
          const rating = testimonial.rating;
          const Icon = testimonial.userProfile;
          return (
            <div key={index}>
              <Card key={index} className="w-96 h-auto p-6 shadow-sm hover:shadow-xl transform transition-all hover:scale-105 duration-300 cursor-pointer">
                <div className="flex justify-between">
                  <Quote className="h-6 w-6 text-indigo-600" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>

                <div className="text-slate-700 font-medium">"{testimonial.testimonial}"</div>

                <div className="flex items-center">
                  <div className="pr-4">
                    <Icon size={60} className="border border-slate-600 rounded-full p-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.designation}</div>
                    <div className="text-sm font-medium text-indigo-600">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/*Branding* */}
        <div className="w-full max-w-8/12 pt-16 mt-20 flex justify-center flex-col items-center border-t border-t-slate-200 border-b border-b-slate-200 pb-16">
            <div className="text-sm text-slate-600 font-medium">
                Our users have landed jobs at top companies including:
            </div>
 
            <div className="pt-10 text-3xl flex justify-evenly w-full">
                {CompanyMetaData.map((company: string, index: number) => (
                    <div key={index} className="opacity-60 text-slate-400 hover:text-slate-600 transition-colors font-bold text-2xl">{company}</div>
                ))}
            </div>
        </div>
        
        {/*Statistics* */}
        <div className="pt-16 w-full flex max-w-8/12 justify-between">
            {StatisticsMetaData.map((stats: statistics, index: number) => (
                <div className="flex justify-center flex-col items-center">
                    <div className="text-slate-900 font-bold text-3xl mb-2">
                        {stats.stats}
                    </div>
                    <div className="text-sm text-slate-600">
                        {stats.description}
                    </div>
                </div>
            ))}
        </div>

    </div>
  );
}

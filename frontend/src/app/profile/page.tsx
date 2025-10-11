import WhatYouWillGet from "./component/Offerings";
import OnboardingForm from "./component/OnboardingForm";
import SetupProgress from "./component/Progress";

export default function page(){
  return (
    <div className="w-full max-w-full bg-gradient-to-br from-slate-50 via-white to-indigo-50/30 pt-20 flex justify-center">
        <div className="max-w-7xl">
            
            <h1 className="text-4xl text-center font-bold text-slate-900 mb-4">Build your Professional Profile</h1>
            <div className="text-lg text-slate-600 text-center font-medium w-full">Create your profile to get AI-powered job matching scores and personalized outreach tools. Our platform analyzes job descriptions against your profile to help you find the best opportunities.</div>

            <div className="flex gap-10 mt-10 w-full">
                <div>
                    <SetupProgress/>
                    <WhatYouWillGet/>
                </div>

                <div className="max-w-11/12 w-full">
                    <OnboardingForm/>
                </div>
            </div>
        </div>
    </div>
  )
}

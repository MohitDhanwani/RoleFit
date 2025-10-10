"use client"
import { useState } from "react";
import Step1 from "./onboaring/Step1";
import Step2 from "./onboaring/Step2";
import { Button } from "@/components/ui";
import Step3 from "./onboaring/Step3";
import Step4 from "./onboaring/Step4";

export default function OnboardingForm(){
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextState = () => {
        if(currentStep != 4){
        setCurrentStep((prevStep) => prevStep + 1);
        }
    }

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    }

    return (
        <div className="border border-slate-200 shadow-sm p-8 pt-10 pb-10 rounded-lg h-[58vh]">
            {currentStep == 1 && <Step1/>}
            {currentStep == 2 && <Step2/>}
            {currentStep == 3 && <Step3/>}
            {currentStep == 4 && <Step4/>}


            <div className="pt-10 pb-4 w-full flex justify-between">
            <Button variant={"primary"} className="px-8 bg-gradient-to-r from-indigo-600 to-purple-600" onClick={handlePreviousStep} disabled={currentStep == 1}>Previous</Button>
            <Button variant={"primary"} className="px-8 bg-gradient-to-r from-indigo-600 to-purple-600" onClick={handleNextState}>{currentStep == 4 ? "Submit" : "Next"}</Button>
            </div>
        </div>
    )
}
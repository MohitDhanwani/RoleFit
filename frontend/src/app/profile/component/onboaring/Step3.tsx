import { Checkbox, Input, Label } from "@/components/ui";
import { Clock } from "lucide-react";

export default function Step3() {
  return (
    <div>
      <div className="flex gap-3">
        <div className="p-2 bg-indigo-100 flex justify-center items-center rounded-lg">
          <Clock color="blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Experience Level</h1>
          <h3 className="text-slate-600">Tell us about your professional background</h3>
        </div>
      </div>

      <div className="bg-slate-50 rounded-lg p-6 mt-10">
        <h1 className="text-lg font-medium text-slate-900 mb-4">Do you have professional experience in your target field?</h1>
        <div className="flex gap-8">
          <div className="flex gap-3 border-2 border-slate-200 p-4 rounded-lg">
            <Checkbox id="yes-experience" className="w-6 h-6 border-slate-400" />
            <Label className="font-medium">Yes, I have Experience</Label>
          </div>
          <div className="flex gap-3 border-2 border-slate-200 p-4 rounded-lg">
            <Checkbox id="no-experience" className="w-6 h-6 border-slate-400" />
            <Label className="font-medium">No, I am just starting</Label>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Label className="font-semibold text-slate-700 mb-4">Total Years of Experience</Label>
        <Input placeholder="Eg 24" />
      </div>
    </div>
  );
}

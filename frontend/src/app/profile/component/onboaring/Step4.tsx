import { File, InfoIcon } from "lucide-react";
import { Input } from "@/components/ui";
import { useState } from "react";

export default function Step4() {
  const [showResumeInfo, setShowResumeInfo] = useState(false);

  const handleMouseMove = () => {
    setShowResumeInfo(true);
  };

  const handleMouseLeave = () => {
    setShowResumeInfo(false);
  };

  return (
    <div className="pt-4">
      <div className="flex gap-3 items-center">
        <div className="bg-indigo-100 p-2 flex justify-center items-center rounded-lg">
          <File color="blue" />
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-slate-900 font-bold">Upload Your Resume</h1>
          <InfoIcon size={16} onMouseEnter={handleMouseMove} onMouseLeave={handleMouseLeave} />
        </div>

        {showResumeInfo && (
          <div>
            <span className="text-xs relative -top-8 -left-7 border-slate-200 border-2 p-2 rounded-lg font-semibold">Upload resume in pdf format only (max size 5 MB)</span>
          </div>
        )}
      </div>

      <div className="pt-8">
        <Input type="file"></Input>
      </div>
    </div>
  );
}

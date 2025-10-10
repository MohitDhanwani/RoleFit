import { FormInput, Input, Label } from "@/components/ui";
import { DatePicker } from "@/components/ui/date-picker";
import { User } from "lucide-react";

interface PersonalInfo {
  name: string;
  email: string;
  contactNp: string;
}

export default function Step1() {
  return (
    <div>
      <div className="flex gap-3">
        <div className="bg-indigo-100 p-2 rounded-lg flex justify-center items-center">
          <User color="blue" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Personal Information</h1>
          <h3 className="text-slate-600">Let's start with your basic details</h3>
        </div>
      </div>
    
      <form action="">
        <div className="w-full flex flex-wrap pt-8">
        
        <div className="max-w-3xl w-full flex justify-between gap-16">
          <div className="w-full max-w-xl">
          <Label className="mb-2">Name</Label>
          <Input name="Name" placeholder="Full name" />
        </div>

        <div className="w-full max-w-xl">
          <Label className="mb-2">Email</Label>
          <Input name="Email" placeholder="Email Address" type="email" />
        </div>
        </div>

       <div className="max-w-3xl w-full flex justify-between gap-16 pt-10">
         <div className="w-full max-w-xl">
          <Label className="mb-2">Contact Number</Label>
          <Input name="Contact" placeholder="Contact Number" type="number" />
        </div>

        <div className="max-w-xl w-full">
          <Label className="mb-2">Date Of Birth</Label>
          <DatePicker />
        </div>
       </div>

       
        </div>
      </form>
    </div>
  );
}

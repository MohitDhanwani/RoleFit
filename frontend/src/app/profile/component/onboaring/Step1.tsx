import { Input, Label } from "@/components/ui";
import { User } from "lucide-react";

interface UserPersonalInfo {
  name: string;
  email: string;
  contactNo: string;
}

interface Props {
  data: UserPersonalInfo;
  setUserDetails: (details: UserPersonalInfo) => void;
}

export default function Step1({ data, setUserDetails }: Props) {
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
        <div className="w-full flex flex-wrap pt-8 gap-8">
          <div className="w-[22vw]">
            <Label className="mb-2">Name *</Label>
            <Input
              name="Name"
              placeholder="Full name"
              className="border-slate-300 border-2"
              onChange={(e) => setUserDetails({ ...data, name: e.target.value })}
              required
            />
          </div>

          <div className="w-[22vw]">
            <Label className="mb-2">Email *</Label>
            <Input
              name="Email"
              placeholder="Email Address"
              type="email"
              className="border-slate-300 border-2"
              onChange={(e) => setUserDetails({ ...data, email: e.target.value })}
              required
            />
          </div>
          <div className="w-[22vw]">
            <Label className="mb-2">Contact Number *</Label>
            <Input
              name="Contact"
              placeholder="Contact Number"
              type="number"
              className="border-slate-300 border-2"
              onChange={(e) => setUserDetails({ ...data, contactNo: e.target.value })}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

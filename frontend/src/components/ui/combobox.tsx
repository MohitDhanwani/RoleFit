"use client";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { UserPreferenceInfo } from "@/app/profile/component/onboaring/Step2";

interface Data {
  label: string;
  value: string;
}

interface SetterFunction {
  data: Data[];
  placeholder: string;
  label: string;
  field: "skills" | "jobProfilesTargetting";
  selectedValues: string[];
  setUserDetails: (details: Partial<UserPreferenceInfo>) => void;
}

export function ComboboxDemo({ data, label, placeholder, field, selectedValues, setUserDetails }: SetterFunction) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedValue: string) => {
    let updatedValues;

    if (selectedValues.includes(selectedValue)) {
      updatedValues = selectedValues.filter((value) => value !== selectedValue);
    } else {
      updatedValues = [...selectedValues, selectedValue];
    }

   setUserDetails({ [field]: updatedValues });
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="base" role="combobox" aria-expanded={open} className="w-full justify-between border-2 mt-1">
          {selectedValues.length > 0 ? `${selectedValues.length} selected` : label}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>No Jobs found.</CommandEmpty>
            <CommandGroup>
              {data.map((data) => (
                <CommandItem key={data.value} value={data.value} onSelect={() => handleSelect(data.value)}>
                  {data.label}
                  <Check className={cn("ml-auto", selectedValues.includes(data.value) ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

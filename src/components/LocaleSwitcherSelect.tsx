"use client";

import { ReactNode, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  children: ReactNode;
  defaultValue: string;
  label: string;
  onSelectChange: (value: string) => void;
};

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
  onSelectChange,
}: Props) {
  const [isPending, startTransition] = useTransition();

  function handleChange(value: string) {
    startTransition(() => {
      onSelectChange(value);
    });
  }

  return (
    <div className="relative">
      <Select
        onValueChange={handleChange}
        defaultValue={defaultValue}
        disabled={isPending}
      >
        <SelectTrigger className="w-[180px] bg-transparent">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="bg-transparent backdrop-blur-3xl text-white">
          <SelectGroup>
            <SelectLabel className="text-white">{label}</SelectLabel>
            {children}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

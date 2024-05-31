import { useEffect, useState } from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useRouter } from "next/navigation";
import { SelectItem } from "@/components/ui/select";

export default function LocaleSwitcher() {
  const router = useRouter();
  const [defaultLocale, setDefaultLocale] = useState<string | null>(null);

  useEffect(() => {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      setDefaultLocale(savedLocale);
    } else {
      setDefaultLocale("en");
    }
  }, []);

  function handleLocaleChange(value: string) {
    localStorage.setItem("locale", value);
    setDefaultLocale(value);
    router.push(`/${value}`);
  }

  if (defaultLocale === null) {
    return null;
  }

  return (
    <LocaleSwitcherSelect
      defaultValue={defaultLocale}
      label={"Select Language"}
      onSelectChange={handleLocaleChange}
    >
      <SelectItem key="id" value="id">
        Indonesia
      </SelectItem>
      <SelectItem key="en" value="en">
        English
      </SelectItem>
    </LocaleSwitcherSelect>
  );
}

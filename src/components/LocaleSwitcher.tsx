import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { useRouter } from "next/navigation";
import { SelectItem } from "@/components/ui/select";


export default function LocaleSwitcher() {
  const router = useRouter();

  function handleLocaleChange(value: string) {
    router.push(`/${value}`);
  }

  return (
    <LocaleSwitcherSelect
      defaultValue={"en"}
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

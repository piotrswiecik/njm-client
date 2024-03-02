import SortSelectorDropdown from "@/ui/atoms/SortSelectorDropdown";

const SortSelectorBar = async () => {
  return (
    <div className="flex flex-row justify-end">
    <SortSelectorDropdown />
    </div>
  );
};

export default SortSelectorBar;
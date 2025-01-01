import { Search } from "lucide-react";
import { Input } from "./ui/input";

export const SearchBar = () => {
  return (
    <div className="relative w-full max-w-2xl">
      <Input
        type="text"
        placeholder="Search for stores, brands, or deals..."
        className="pl-10 py-6 text-lg rounded-xl border-2 border-gray-200 focus:border-primary"
      />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  );
};
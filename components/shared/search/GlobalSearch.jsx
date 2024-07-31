"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import SearchIcon from "../SearchIcon";

const GlobalSearch = () => {
  const router = useRouter();
  // const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSearch = () => {
    if (search.trim()) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("frompublicsearch", "true");

        const newUrl = `/parts/${search.trim()}?${newSearchParams.toString()}`;
        console.log(newUrl);
        router.push(newUrl);
        setSearch("");
        // parts/as100?frompublicsearch=true
      }, 500); // 500ms debounce time

      setTimeoutId(newTimeoutId);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient drop-shadow-custom relative flex min-h-[56px] grow items-center gap-1 rounded-full px-4">
        <Input
          type="text"
          placeholder="Free Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent pl-2 shadow-none outline-none"
        />
        <div
          className="flex cursor-pointer items-center justify-center rounded-full bg-[#192953] p-2"
          onClick={handleSearch}
        >
          <SearchIcon color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;

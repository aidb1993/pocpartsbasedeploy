"use client";

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import SearchIcon from "../SearchIcon";

const GlobalSearch = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);

  const handleSearch = (event) => {
    if (event.key === "Enter" && search.trim()) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      const newTimeoutId = setTimeout(() => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set("partnumber", search.trim());
        newSearchParams.set("frompublicsearch", "true");

        const newUrl = `${pathname}?${newSearchParams.toString()}`;
        router.push(newUrl);
      }, 500); // 500ms debounce time

      setTimeoutId(newTimeoutId);
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
          onKeyDown={handleSearch}
          className="paragraph-regular no-focus placeholder text-dark400_light700 border-none bg-transparent pl-2 shadow-none outline-none"
        />
        <div className="flex size-[40px] items-center justify-center rounded-full bg-[#192953] p-2">
          <SearchIcon color="#ffffff" />
        </div>
      </div>
    </div>
  );
};

export default GlobalSearch;

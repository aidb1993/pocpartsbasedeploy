"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { relatedSearchesForDK120 } from "@/constants";
import SearchIcon from "../shared/SearchIcon";
import { ChevronDown, ChevronUp } from "lucide-react";

const RelatedSearchesCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const displayedSearches = isLargeScreen
    ? relatedSearchesForDK120
    : isDropdownOpen
      ? relatedSearchesForDK120
      : relatedSearchesForDK120.slice(0, 2);

  return (
    <div className="card-wrapper background-light700_dark400 shadow-light100_dark100 text-dark200_light800 rounded-xl p-6 sm:p-9">
      <h2 className="h2-semibold mb-6 text-center">
        Related Searches for DK120
      </h2>
      <div
        className={`grid gap-4 ${isLargeScreen ? "grid-cols-5" : "grid-cols-1 sm:grid-cols-2"}`}
      >
        {displayedSearches.map((search, index) => (
          <div
            key={index}
            className="background-light900_dark300 shadow-light100_dark100 rounded-[4px] p-4 text-center"
          >
            <h3 className="h3-semibold">{search.term}</h3>
            <p>{search.description}</p>
            <Link
              href={search.link}
              className="mt-2 flex cursor-pointer items-center justify-center text-primary-500"
            >
              View search results <SearchIcon color="#7B8EC8" />
            </Link>
          </div>
        ))}
      </div>
      {!isLargeScreen && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-center rounded-full bg-primary-500 p-2 text-white"
          >
            {isDropdownOpen ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default RelatedSearchesCard;

"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "../shared/SearchIcon";
import { ChevronDown, ChevronUp } from "lucide-react";

const RelatedSearchesCard = ({ data, partNumber }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [relatedSearches, setRelatedSearches] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Set initial state
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("RelatedSearchesCard data:", data);
    if (Array.isArray(data) && data.length > 0 && data[0]._listpartnumbers) {
      setRelatedSearches(data[0]._listpartnumbers);
    } else {
      setRelatedSearches([]);
    }
  }, [data]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const displayedSearches = isLargeScreen
    ? relatedSearches
    : isDropdownOpen
      ? relatedSearches
      : relatedSearches.slice(0, 2);

  return (
    <div className="card-wrapper background-light700_dark400 shadow-light100_dark100 text-dark200_light800 rounded-xl p-6 sm:p-9">
      <h2 className="h2-semibold mb-6 text-center">
        Related Searches for {partNumber}
      </h2>
      <div
        className={`grid gap-4 ${isLargeScreen ? "grid-cols-5" : "grid-cols-1 sm:grid-cols-2"}`}
      >
        {displayedSearches.map((search, index) => (
          <div
            key={index}
            className="background-light900_dark300 shadow-light100_dark100 rounded-[4px] p-4 text-center"
          >
            <h3 className="h3-semibold">{search.partNumber}</h3>
            <p>{search.description}</p>
            <Link
              href={`/search-results/${search.partNumber}`}
              className="mt-2 flex cursor-pointer items-center justify-center text-primary-500"
            >
              View search results <SearchIcon color="#2A7DE2" className='pl-2' />
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

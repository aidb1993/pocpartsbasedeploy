import React from "react";
import Link from "next/link";
import Image from "next/image";
import { relatedSearchesForDK120 } from "@/constants";

const RelatedSearchesCard = () => {
  return (
    <div className="card-wrapper background-light700_dark400 shadow-light100_dark100 text-dark200_light800 rounded-xl p-6 sm:p-9">
      <h2 className="h2-semibold mb-6 text-center">
        Related Searches for DK120
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {relatedSearchesForDK120.map((search, index) => (
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
              View search results{" "}
              <Image
                src="/assets/icons/search.svg"
                alt="Search icon"
                width={26}
                height={26}
                className="ml-1"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedSearchesCard;

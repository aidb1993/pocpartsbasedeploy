import React from "react";
import Link from "next/link";

const StatisticsCard = ({
  activeSellers,
  searched,
  sellersLink,
  searchesDescription,
}) => {
  return (
    <div className="card-wrapper text-dark100_light900 grid h-auto grid-cols-1 gap-4 rounded-[10px] p-4 shadow-lg sm:p-6 md:grid-cols-2 md:p-8">
      <div className="flex flex-col items-center justify-center border-b pb-4 text-center md:border-b-0 md:border-r md:pb-0 md:pr-4">
        <h2 className="h2-semibold mb-2">{`DK120`}</h2>
        <p className="mb-2">Active Sellers:</p>
        <h3 className="mb-4 text-3xl font-bold text-primary-500 sm:text-4xl">
          {activeSellers}
        </h3>
        <Link href={sellersLink} className="text-primary-500">
          Click to View All Suppliers
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="h2-semibold mb-2">{`DK120`}</h2>
        <p className="mb-2">Searched</p>
        <h3 className="mb-4 text-3xl font-bold text-primary-500 sm:text-4xl">
          {searched}
        </h3>
        <p>{searchesDescription}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;

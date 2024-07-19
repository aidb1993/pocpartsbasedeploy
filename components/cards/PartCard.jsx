"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import ModalCard from "./ModalCard";

const PartCard = ({
  partNumber,
  descriptions,
  alternativePartNumbers,
  manufacturers,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);

  return (
    <div className="text-dark100_light900 rounded-[10px] p-9 sm:px-11">
      <div className="max-w-[186px] rounded-md bg-light-blue-background p-4 text-center shadow-md">
        <h1 className="h1-bold text-primary-500">{partNumber}</h1>
      </div>

      <section className="mt-6">
        <h2 className="h2-semibold">Description</h2>
        <ul className="mt-3">
          {descriptions.map((desc, index) => (
            <li key={index}>
              <Link
                href={`/parts/${desc.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-primary-500 underline"
              >
                {desc}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="h2-semibold">Alternative Part Numbers</h2>
        <ul className="mt-3">
          {alternativePartNumbers.map((partNumber, index) => (
            <li key={index}>
              <Link
                href={`/parts/${partNumber.replace(/\s+/g, "-").toLowerCase()}`}
                className="text-primary-500 underline"
              >
                {partNumber}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-6">
        <div className="grid grid-cols-2 gap-4">
          <h2 className="h2-semibold">Manufacturer</h2>
          <h2 className="h2-semibold col-span-1">NSN</h2>
          {manufacturers.map((manufacturer, index) => (
            <React.Fragment key={index}>
              <Link
                href={`/manufacturers/${manufacturer.name
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
                className="text-primary-500 underline"
              >
                {manufacturer.name}
              </Link>
              <span>{manufacturer.nsn}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      <div className="mt-6">
        <Button
          className="primary-gradient text-dark400_light900 flex h-[74px] min-h-[56px] w-[364px] cursor-pointer items-center justify-center rounded-[4px] px-4 py-3 text-center text-[22px] font-medium leading-[30px] text-white shadow-none"
          onClick={() => setIsModalOpen(true)}
        >
          Claim Demand Report
        </Button>
      </div>

      <ModalCard isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default PartCard;

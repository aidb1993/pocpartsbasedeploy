"use client";
import React, { useState } from "react";
import ModalCard from "./ModalCard";
import { Button } from "../ui/button";

const MarketPriceCard = ({ conditionCodes, medianMarket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);
  return (
    <div className="card-wrapper text-dark100_light900 rounded-[10px] p-6 shadow-lg sm:p-9 md:p-11">
      <h2 className="h2-semibold text-center">Market Price</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="background-light900_dark300">
            <tr>
              <th className="px-4 py-2 text-left">Condition Code</th>
              {conditionCodes.map((code, index) => (
                <th key={index} className="px-4 py-2 text-left">
                  {code}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-t px-4 py-2">Median Market</td>
              {medianMarket.map((price, index) => (
                <td key={index} className="border-t px-4 py-2">
                  {price}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-6 text-center">
        <Button
          className="primary-gradient base-medium text-dark400_light900 flex h-[74px] min-h-[56px] w-[364px] cursor-pointer items-center justify-center rounded-[4px] px-4 py-3 text-center text-[22px] leading-[30px] text-white shadow-none"
          onClick={() => setIsModalOpen(true)}
        >
          Unlock Full Market Pricing
        </Button>
      </div>
      <ModalCard isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default MarketPriceCard;

"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import ModalCard from "./ModalCard";
import productListingsData from "@/mocks/productListingsData";

const ProductListingsCard = ({ productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("ProductListingsCard props:", { productData });
  }, [productData]);

  const handleModalClose = () => setIsModalOpen(false);

  const dataToRender = productData?.rateLimitExceeded
    ? productListingsData
    : productData || [];

  return (
    <div className="card-wrapper text-dark100_light900 rounded-[10px] p-6 shadow-lg sm:p-9 md:p-11">
      <h2 className="h2-semibold mb-4 text-center">Product Listings</h2>
      <div className="overflow-x-auto">
        <Table className="min-w-full">
          <TableHeader className="hidden lg:table-header-group">
            <TableRow>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Part Number
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Company Name
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Description
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                CC
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Qty
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Unit Price
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Location
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Certs
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Img
              </TableHead>
              <TableHead className="px-4 py-2 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Uploaded
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.isArray(dataToRender) ? (
              dataToRender.slice(0, 10).map((product, index) => (
                <TableRow
                  key={index}
                  className="mb-4 block border-b lg:mb-0 lg:table-row lg:border-none"
                >
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.partNumber}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.description}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.conditionCode}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.unitPrice.toFixed(2)}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.location}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.cert ? "Yes" : "No"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.imageCount ? "Yes" : "No"}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm">
                    {product.uploadDate}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div>No data available.</div>
            )}
          </TableBody>
        </Table>
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

export default ProductListingsCard;

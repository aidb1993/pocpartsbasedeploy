"use client";
import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { Button } from "../ui/button";
import ModalCard from "./ModalCard";

const ProductListingsCard = ({ productData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => setIsModalOpen(false);

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
            {productData.slice(0, 10).map((product, index) => (
              <React.Fragment key={index}>
                <TableRow className="mb-4 block border-b lg:mb-0 lg:table-row lg:border-none">
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Part_Number'] lg:before:hidden">
                    {product.partNumber}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Company_Name'] lg:before:hidden">
                    {product.companyName}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Description'] lg:before:hidden">
                    {product.description}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['CC'] lg:before:hidden">
                    {product.conditionCode}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Qty'] lg:before:hidden">
                    {product.quantity}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Unit_Price'] lg:before:hidden">
                    <Link href="#" className="text-blue-500 dark:text-blue-400">
                      Quick RFQ
                    </Link>
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Location'] lg:before:hidden">
                    {product.location}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Certs'] lg:before:hidden">
                    {product.cert ? (
                      <span className="icon icon-cert text-green-500">✔️</span>
                    ) : (
                      <span className="icon icon-cert text-red-500">❌</span>
                    )}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Img'] lg:before:hidden">
                    {product.imageCount ? (
                      <span className="icon icon-img text-green-500">✔️</span>
                    ) : (
                      <span className="icon icon-img text-red-500">❌</span>
                    )}
                  </TableCell>
                  <TableCell className="whitespace-nowrap px-4 py-2 text-sm before:block before:font-medium before:uppercase before:tracking-wider before:text-gray-500 before:content-['Uploaded'] lg:before:hidden">
                    {product.uploadDate}
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="mt-4 text-center">
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          onClick={() => setIsModalOpen(true)}
        >
          Unlock All Suppliers
        </Button>
      </div>
      <ModalCard isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default ProductListingsCard;

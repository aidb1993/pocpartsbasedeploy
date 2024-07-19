import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";

const MembershipSection = () => {
  return (
    <div className="flex h-[537px] w-full items-center justify-center rounded-[10px] bg-light-blue-background">
      <div className="max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-primary-500 sm:text-4xl">
          Search our worldwide database of over 15 billion aviation parts
        </h2>
        <p className="text-dark300_light700 mt-4 text-lg">
          Inventory includes listings in commercial, general, military, and
          aerospace parts like DK120.
        </p>

        <div className="mt-6 flex justify-center">
          <Link href="#" passHref>
            <Button className="btn-tertiary flex h-[56px] min-h-[46px] w-full max-w-[200px] cursor-pointer items-center justify-center rounded-[4px] px-8 py-6 font-medium leading-[30px] !text-light-900 shadow-none">
              <span className="block">Book a Demo</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MembershipSection;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { navbarLinks } from "@/constants";
import GlobalSearch from "../search/GlobalSearch";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    /*  + 2xl:px-64 */
    <nav className="background-light900_dark200 flex-between fixed z-50 h-[134px] w-full p-6 shadow-light-300 dark:shadow-none sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-32">
      {/* + gap-8 */}
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/assets/images/site-logo.svg"
            width="190"
            height="37"
            alt="Partsbase Logo"
          />
        </Link>
        {/* <div className="hidden flex-1 justify-center md:flex"> */}
        <GlobalSearch />
        {/* </div> */}
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-5 2xl:flex">
          {navbarLinks.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="text-dark300_light900 hover:text-primary-500"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[56px] rounded-[4px] border px-4 py-3 shadow-none">
              Book a Demo
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary flex min-h-[56px] items-center rounded-[4px] px-4 py-3 shadow-none sm:min-w-[120px]">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient hidden lg:block">
                Log In
              </span>
            </Button>
          </Link>
        </div>

        <div className="2xl:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

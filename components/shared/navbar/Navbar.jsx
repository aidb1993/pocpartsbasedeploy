import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { navbarLinks } from "@/constants";
import GlobalSearch from "../search/GlobalSearch";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 h-[134px] w-full bg-gray-50 p-6 dark:shadow-none sm:px-12 md:px-16 lg:px-24 xl:px-32 2xl:px-32">
      <div className="flex items-center gap-8">
        <Link href="/">
          <Image
            src="/assets/images/site-logo.svg"
            width="190"
            height="37"
            alt="Partsbase Logo"
          />
        </Link>
        <GlobalSearch />
      </div>

      <div className="flex items-center gap-5">
        <div className="hidden items-center gap-5 maxxl:flex">
          {navbarLinks.map((item) => (
            <Link
              key={item.route}
              href={item.route}
              className="text-dark300_light900 text-sm hover:text-primary-500"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary flex min-h-[50px] items-center rounded-[4px] px-3 py-2 shadow-none sm:min-w-[100px]">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={18}
                height={18}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient hidden text-sm lg:block">
                Log In
              </span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[50px] rounded-[4px] border px-3 py-2 !text-light-900 shadow-none">
              Book a Demo
            </Button>
          </Link>
        </div>

        <Link href="/sign-in" className="flex maxxl:hidden">
          <Button className="small-medium btn-secondary flex min-h-[50px] items-center rounded-[4px] px-3 py-2 shadow-none sm:min-w-[100px]">
            <Image
              src="/assets/icons/account.svg"
              alt="login"
              width={18}
              height={18}
              className="invert-colors lg:hidden"
            />
            <span className="primary-text-gradient hidden text-sm lg:block">
              Log In
            </span>
          </Button>
        </Link>

        <div className="maxxl:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

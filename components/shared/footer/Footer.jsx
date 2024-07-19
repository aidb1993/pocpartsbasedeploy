import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BsInstagram,
  BsFacebook,
  BsTwitterX,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="light-border background-light900_dark200 border-t px-4 py-10 md:px-12">
      <div className="container mx-auto grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Link
            href="https://www.partsbase.com/landing/login"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Login
          </Link>
          <Link
            href="https://www.partsbase.com/becomeaMember"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Membership
          </Link>
          <Link
            href="https://www.partsbase.com/landing/training"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Videos
          </Link>
          <Link
            href="https://www.partsbase.com/contact"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://www.partsbase.com/parts/"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Search for Parts
          </Link>
          <Link
            href="https://www.partsbase.com/messageBoard/search"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message Board
          </Link>
          <Link
            href="https://www.govgistics.com/"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Government Data
          </Link>
          <Link
            href="https://www.partsbase.com/aeropages"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            AeroPages
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            href="https://pblister.partsbase.com/"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            PB Lister
          </Link>
          <Link
            href="https://partstore.partsbase.com/"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            PartStore
          </Link>
          <Link
            href="https://www.partsbase.com/bookADemo"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a Demo
          </Link>
          <Link
            href="https://www.linkedin.com/company/partsbase-com/jobs/"
            className="text-dark400_light800"
            target="_blank"
            rel="noopener noreferrer"
          >
            Careers
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="text-dark400_light800 text-lg font-bold">PartsBase</h4>
          <address className="text-dark400_light800 not-italic">
            5401 Broken Sound Blvd NW, Boca Raton, FL 33487
          </address>
          <div className="mt-4 flex gap-4">
            <Link
              href="https://www.facebook.com/partsbasemarketplace"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook
                className="text-dark400_light800 hover:text-dark500_light500"
                size={24}
              />
            </Link>
            <Link
              href="https://www.instagram.com/partsbaseofficial/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                className="text-dark400_light800 hover:text-dark500_light500"
                size={24}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/partsbase-com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                className="text-dark400_light800 hover:text-dark500_light500"
                size={24}
              />
            </Link>
            <Link
              href="https://x.com/partsbase"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX
                className="text-dark400_light800 hover:text-dark500_light500"
                size={24}
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCEFgdC9x9ljb3UjlEieqN6g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube
                className="text-dark400_light800 hover:text-dark500_light500"
                size={24}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="light-border-2 mt-10 border-t pt-6">
        <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
          <Image
            src="/assets/images/site-logo.svg"
            width={190}
            height={37}
            alt="PartsBase"
            className="mb-4 md:mb-0"
          />
          <div className="flex items-center gap-8">
            <Image
              src="/assets/images/acredited.svg"
              width={100}
              height={60}
              alt="BBB Accredited Business"
            />
            <Image
              src="/assets/images/ASA_logo.svg"
              width={100}
              height={60}
              alt="ASA Member"
            />
          </div>
          <p className="text-dark500_light700 mt-4 md:mt-0">
            Copyright PartsBase © 2024 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

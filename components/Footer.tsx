import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerLinks } from "@/constants";
import { getCurrentYear } from "@/Utility";
import { title } from "process";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width="118"
            height="18"
            className="object-contain"
          />
          <p>Car Hub {getCurrentYear()} All Rights Reserved &copy;</p>
        </div>

        <div className="footer__links">
          {footerLinks.map((titleData, tileIndex) => (
            <div className="footer__link" key={tileIndex}>
              <h3 className="font-bold"> {titleData.title}</h3>
              {titleData.links.map((Item, itemIndex) => (
                <Link key={itemIndex} href={Item.url} className="text-grey-500">
                  {Item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p> {getCurrentYear()} CarHub. All Rights Reserved.</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>

          <Link href="/" className="text-gray-500">
            Terms Of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

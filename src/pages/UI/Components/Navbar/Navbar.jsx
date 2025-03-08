import { NavbarContext } from "@/pages/_app";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLinks } from "@/utils/CONSTANTS";
import { FaPlus } from "react-icons/fa6";

function Navbar() {
  const navbar = useContext(NavbarContext);
  const [isMobileVisible, setIsMobileVisible] = useState(false);
  return (
    <>
      <div className="bg-blue z-[1000]">
        <div className="container mx-auto py-4 flex justify-between items-center w-[95%]">
          <Link href="/" className="text-3xl text-background font-changa">
            Discus Gallery
          </Link>
          <div className="md:block hidden">
            {NavLinks.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                className="ml-8 text-background font-semibold hover:text-orange "
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            {isMobileVisible ? (
              <FaPlus
                size={25}
                className="cursor-pointer rotate-45 text-background"
                onClick={() => setIsMobileVisible(!isMobileVisible)}
              />
            ) : (
              <RiMenu3Fill
                size={25}
                className="cursor-pointer text-background"
                onClick={() => setIsMobileVisible(!isMobileVisible)}
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`w-[100%] absolute right-0 backdrop-blur-[15px] min-h-screen bg-blue md:hidden ${
          isMobileVisible ? "flex" : "hidden"
        } transition-none duration-300`}
      >
        <div className="flex flex-col text-center w-full">
          {NavLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="my-4 text-background"
              onClick={() => setIsMobileVisible(false)}
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;

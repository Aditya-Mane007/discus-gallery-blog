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
            {NavLinks.map((link) => (
              <Link
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
          {NavLinks.map((link) => (
            <Link
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

{
  /* <>
<div
  className={`w-full mx-auto z-50  ${
    navbar
      ? "sticky top-0 bg-transparent backdrop-blur-[15px]"
      : "absolute top-0 bg-transparent"
  }`}
>
  <div
    className={`container md:w-full w-[90%] mx-auto py-4 hidden md:flex md:items-center md:justify-between text-background  rounded-lg `}
  >
    <Link href="/" className="logo text-3xl font-changa">
      Discus Gallery
    </Link>
    <ul className="flex cursor-pointer">
      <Link href="/" className="sm:mx-4 mx-0 py-2 text-[1rem] font-bold">
        Home
      </Link>
      <Link
        href="/about-us"
        className="sm:mx-4 mx-2 py-2 text-[1rem] font-bold"
      >
        About Us
      </Link>
      <Link
        href="/#faq"
        className="sm:mx-4 mx-0 py-2 text-[1rem] font-bold"
      >
        FAQs
      </Link>
    </ul>
  </div>
</div>

<div
  className={`z-50 sticky top-0 container w-full px-6 mx-auto py-4 md:hidden flex justify-between items-center text-background bg-transparent backdrop-blur-[15px]`}
>
  <Link href="/" className="logo text-3xl font-changa">
    Discus Gallery
  </Link>

  <div>
    {isMobileVisible ? (
      <FaPlus
        size={25}
        className="cursor-pointer rotate-45"
        onClick={() => setIsMobileVisible(!isMobileVisible)}
      />
    ) : (
      <RiMenu3Fill
        size={25}
        className="cursor-pointer"
        onClick={() => setIsMobileVisible(!isMobileVisible)}
      />
    )}
  </div>
  {isMobileVisible && (
    <div className="md:hidden right-0 w-full min-h-screen absolute top-[4rem] bg-transparent backdrop-blur-[15px] py-8">
      <ul className="flex flex-col cursor-pointer mx-8 text-center bg-transparent backdrop-blur-[15px]">
        {NavLinks.map((link) => (
          <Link
            href={link.link}
            className="sm:mx-4 mx-0 py-2 text-2xl font-bold"
            onClick={() => setIsMobileVisible(false)}
          >
            {link.title}
          </Link>
        ))}
      </ul>
    </div>
  )}
</div>
</> */
}

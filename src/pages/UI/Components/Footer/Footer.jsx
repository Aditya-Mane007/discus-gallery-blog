import Link from "next/link";
import React from "react";
import { FiYoutube } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { NavLinks } from "@/utils/CONSTANTS";

// bg-gradient-to-tr from-rgba(78, 160, 186, 0.25)] from-23% to-[rgba(150, 195, 208, 0.25)] from-92%
const tabs = [
  "Care & Maintenance",
  "Best Foods for Discus Fish",
  "Health & Diseases",
  "Breeding & Raising Fry",
  "Tank Setup & Equipments",
  "Species & Types",
];

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="w-full h-full bg-blue py-8">
      <div className="container mx-auto md:flex justify-between md:w-full w-[95%] ">
        <Link href="/" className="text-3xl font-changa text-background">
          Discus Gallery
        </Link>
        <div className="flex">
          <div className="md:mx-12 my-4 mr-12 md:my-0">
            <div className="text-lg text-background font-doner mb-2 tracking-wider">
              Company
            </div>
            <div className="flex flex-col">
              {NavLinks.map((link) => (
                <Link
                  href={link.link}
                  className="my-1  px-1 text-background underline cursor-pointer hover:text-orange"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="my-4 md:my-0">
            <div className="text-lg text-background font-doner mb-2 tracking-wider">
              Categories
            </div>
            <div className="flex flex-col">
              {tabs.map((tab) => (
                <Link
                  href="/"
                  className="my-1 px-1 text-background underline cursor-pointer hover:text-orange"
                >
                  {tab}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="container mx-auto mt-8 mb-4 " />
      <div className="container mx-auto flex justify-between items-center md:w-full w-[90%]">
        <div className="font-rubik flex items-center text-background ">
          <span
            className="mr-1 font-changa font-thin tracking-wider"
            style={{ wordSpacing: ".15rem" }}
          >
            Discus Gallery
          </span>
          &copy; {date}
        </div>
        <div className="flex">
          <Link href="/">
            <FiYoutube className="mx-2 text-2xl text-background hover:text-orange cursor-pointer" />
          </Link>
          <Link href="/">
            <FiInstagram className="mx-2 text-xl text-background hover:text-orange cursor-pointer" />
          </Link>
          <Link href="/">
            <FiFacebook className="mx-2 text-xl text-background hover:text-orange cursor-pointer" />
          </Link>
          <Link href="/">
            <FaXTwitter className="mx-2 text-xl text-background hover:text-orange cursor-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

// <div className="bg-blue text-background p-4">
// <div className="container mx-auto flex justify-between">
//   <div className="logo text-4xl font-changa">Discus Gallery</div>
//   <div className="Links w-[30%] flex justify-between">
//     <div>
//       <div className="text-xl text-center mb-2">About</div>
//       <div className="text-center">
//         <div>Home</div>
//         <div>About Us</div>
//       </div>
//     </div>
//     <div>
//       <div className="text-xl text-center mb-2">Categories</div>
//       <div className="">
//         <div>Care and Maintenance</div>
//         <div>Best Foods for Discus Fish</div>
//         <div>Health and Diseases</div>
//         <div>Breeding and Raising Fry</div>
//         <div>Tank Setup and Equipments</div>
//         <div>Species and Types</div>
//       </div>
//     </div>
//   </div>
// </div>
// </div>

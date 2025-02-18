import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb({ items }) {
  return (
    <div className="w-full flex flex-wrap items-center md:px-0 px-4">
      {items?.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`flex items-center mr-1 font-normal ${
            item.active ? "text-darkBlue" : "text-[#212121]"
          }`}
        >
          {item.title} {item.icon && <IoIosArrowForward />}
        </Link>
      ))}
    </div>
  );
}

export default Breadcrumb;

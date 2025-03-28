import Head from "next/head";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb({ items }) {
  // const generateBreadCrumbSchema = () => {
  //   return {
  //     "@context": "https://schema.org",
  //     "@type": "BreadcrumbList",
  //     itemListElement:
  //       items &&
  //       items.map((item, index) => ({
  //         "@type": "ListItem",
  //         position: index + 1,
  //         name: item.title,
  //         item: `https://discusgallery.in${item.link}`,
  //       })),
  //   };
  // };

  return (
    <ol
      className="w-full flex flex-wrap items-center md:px-0 m-0"
      itemscope="true"
      itemType="https://schema.org/BreadcrumbList"
    >
      {items.map((item, index) => (
        <li
          key={index}
          itemScope
          itemType="https://schema.org/ListItem"
          itemProp="itemListElement"
          className={`flex items-center mr-1 font-normal ${
            item.active ? "text-darkBlue" : "text-[#212121]"
          }`}
        >
          <Link
            itemScope
            itemType="https://schema.org/WebPage"
            itemProp="item"
            itemID={item.link}
            href={item.link}
          >
            <span itemProp="name">{item.title}</span>
          </Link>

          <meta itemProp="position" content={index + 1} />
          {index < items.length - 1 && <IoIosArrowForward />}
        </li>
      ))}
    </ol>
  );
}

export default Breadcrumb;



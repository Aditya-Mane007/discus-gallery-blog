import Head from "next/head";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb({ items }) {
  const generateBreadCrumbSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement:
        items &&
        items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@id": `https://discusgallery.in${item.link}`,
            name: item.title,
          },
        })),
    };
  };

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBreadCrumbSchema()),
          }}
        />
      </Head>
      <div
        className="w-full flex flex-wrap items-center md:px-0"
        vocab="https://schema.org/"
        typeof="BreadcrumbList"
      >
        {items?.map((item, index) => (
          <div property="itemListElement" typeof="ListItem">
            <Link
              key={index}
              href={item.link}
              className={`flex items-center mr-1 font-normal ${
                item.active ? "text-darkBlue" : "text-[#212121]"
              }`}
              property="item"
              typeof="WebPage"
            >
              {item.title} {item.icon && <IoIosArrowForward />}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Breadcrumb;

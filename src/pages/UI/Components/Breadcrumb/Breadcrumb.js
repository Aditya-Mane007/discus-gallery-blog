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

  console.log(generateBreadCrumbSchema());
  return (
    <>
      <Head>
        <script
          type="applicaiton/ld+json"
          defer
          dangerouslySetInnerHTML={{ __html: generateBreadCrumbSchema() }}
        />
      </Head>
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
    </>
  );
}

export default Breadcrumb;

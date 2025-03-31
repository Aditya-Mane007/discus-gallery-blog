import React, { useState } from "react";
import Breadcrumb from "@/pages/UI/Components/Breadcrumb/Breadcrumb";
import {
  CategoryObject,
  fetchData,
  formateDate,
  modifyTitle,
} from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import SeoConfig from "@/pages/UI/Components/SEO/SEO";
import SEO from "@/pages/UI/Components/SEO/SEO";

function index({ category, categoryPosts, categoryInfo }) {
  const [showInfo, setShowInfo] = useState(true);
  const [showToolTip, setShowToolTip] = useState(false);
  const items = [
    { title: "Home", link: "/", icon: true },
    { title: "Blog", link: "/blog", icon: true },
    {
      title: categoryInfo.data.name,
      link: "/" + categoryInfo.data.slug,
      active: true,
    },
  ];

  return (
    <>
      <SEO
        title={CategoryObject[category] + " | Discus Gallery"}
        description={categoryInfo.data.description}
        imageURL={`${process.env.NEXT_PUBLIC_URL}/assets/HeroBackgroundImage.jpg`}
        url={`${process.env.NEXT_PUBLIC_URL}/blog/${categoryInfo.data.slug}`}
      />
      <div className="container w-[95%] mx-auto my-8 lg:flex">
        <div
          className="hidden max-lg:flex max-lg:justify-end my-2 max-sm:px-4 cursor-pointer relative"
          onClick={() => {
            setShowInfo(!showInfo);
          }}
        >
          {showInfo ? (
            <IoIosCloseCircle size={22} title="hide" className="text-blue" />
          ) : (
            <FaInfoCircle
              size={20}
              title={`Click to read about ${categoryInfo.data.name}`}
              className="text-blue"
            />
          )}
        </div>
        {showInfo && (
          <div className="">
            <div className="w-full max-lg:w-full h-fit bg-blue lg:sticky md:top-20 mb-8 p-4 rounded-xl max-lg:block hidden">
              <h1 className="text-[#ffffff] text-4xl font-doner">
                {categoryInfo.data.name}
              </h1>
              <h2 className="text-[#cfcfcf] my-4 font-doner text-sm leading-relaxed tracking-wider">
                {categoryInfo.data.description}
              </h2>
            </div>
          </div>
        )}

        <div className="w-[35%] max-lg:w-full h-fit bg-blue sticky top-20 p-4 rounded-xl lg:block hidden">
          <h1 className="text-[#ffffff] text-4xl font-doner">
            {modifyTitle(categoryInfo.data.name)}
          </h1>
          <h2 className="text-[#cfcfcf] my-4 font-doner text-sm leading-relaxed tracking-wider">
            {categoryInfo.data.description}
          </h2>
        </div>
        <div className="lg:pl-4 max-lg">
          <Breadcrumb items={items} />
          <div className="my-8 grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-sm:grid-cols-1">
            {categoryPosts && categoryPosts.data.length > 0 ? (
              <>
                {categoryPosts.data.map((post, index) => (
                  <Link href={`/blog/${category}/${post.slug}`} key={index}>
                    <div className="w-full h-full rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
                      <div className="w-full max-sm:h-[250px] max-md:h-[250px] h-[225px] rounded-2xl graident relative">
                        <Image
                          src={post.image}
                          width={1000}
                          height={1000}
                          alt={post.title}
                          quality={100}
                          className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
                        />
                      </div>
                      <div className="w-[93%] mx-auto sm:py-4 max-md:mx-4 s max-sm:absolute max-sm:bottom-5 max-sm:left-0">
                        <h2
                          className="text-[#FFFFFF] text-xl md:mb-2 overflow-hidden max-w-[350px] truncate"
                          title={post.title}
                        >
                          {post.title}
                        </h2>
                        <h3 className="text-xs text-[#cfcfcf] md:my-1 sm:my-1 font-doner tracking-widest">
                          Posted on {formateDate(post.date)}
                        </h3>
                        <div href="/" className="text-sky-300 md:my-2">
                          Read More...
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <>
                <h3>No Posts Available</h3>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { category } = context.query;

  const categoryInfo = await fetchData(
    process.env.NEXT_PUBLIC_API_URL,
    `/${category}/getCategoryInfo`,
    process.env.NEXT_PUBLIC_JWT_TOKEN
  );

  const categoryPosts = await fetchData(
    process.env.NEXT_PUBLIC_API_URL,
    `/${category}/getPostsByCategories`,
    process.env.NEXT_PUBLIC_JWT_TOKEN
  );

  return {
    props: {
      category,
      categoryInfo,
      categoryPosts,
    },
  };
};

export default index;

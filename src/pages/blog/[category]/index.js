import Breadcrumb from "@/pages/UI/Components/Breadcrumb/Breadcrumb";
import { modifyTitle } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function index({ category }) {
  const items = [
    { title: "Home", link: "/" },
    { title: "Blog", link: "/blog" },
    { title: modifyTitle(category), link: category, active: true },
  ];

  return (
    <div className="container mx-auto my-8 w-[95%]">
      <Breadcrumb items={items} />
      <div className="container my-8 grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8 max-sm:grid-cols-1 ">
        <div>
          <div className="w-full h-full mr-5 rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
            <div className="w-full h-[250px] rounded-2xl graident relative">
              <Image
                src="/assets/HeroBackgroundImage.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
              />
            </div>
            <div className="bg-transparent w-[90%] mx-4 sm:py-4 max-sm:absolute bottom-5">
              <h2 className="text-[#FFFFFF] text-2xl md:mb-2">
                {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <h3 className="text-sm text-[#cfcfcf] md:my-1 sm:my-1">
                Posted on 12 january 2024
              </h3>
              <Link href="/" className="text-sky-300 md:my-2">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full mr-5 rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
            <div className="w-full h-[250px] rounded-2xl graident relative">
              <Image
                src="/assets/HeroBackgroundImage.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
              />
            </div>
            <div className="bg-transparent w-[90%] mx-4 sm:py-4 max-sm:absolute bottom-5">
              <h2 className="text-[#FFFFFF] text-2xl md:mb-2">
                {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <h3 className="text-sm text-[#cfcfcf] md:my-1 sm:my-1">
                Posted on 12 january 2024
              </h3>
              <Link href="/" className="text-sky-300 md:my-2">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full mr-5 rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
            <div className="w-full h-[250px] rounded-2xl graident relative">
              <Image
                src="/assets/HeroBackgroundImage.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
              />
            </div>
            <div className="bg-transparent w-[90%] mx-4 sm:py-4 max-sm:absolute bottom-5">
              <h2 className="text-[#FFFFFF] text-2xl md:mb-2">
                {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <h3 className="text-sm text-[#cfcfcf] md:my-1 sm:my-1">
                Posted on 12 january 2024
              </h3>
              <Link href="/" className="text-sky-300 md:my-2">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full mr-5 rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
            <div className="w-full h-[250px] rounded-2xl graident relative">
              <Image
                src="/assets/HeroBackgroundImage.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
              />
            </div>
            <div className="bg-transparent w-[90%] mx-4 sm:py-4 max-sm:absolute bottom-5">
              <h2 className="text-[#FFFFFF] text-2xl md:mb-2">
                {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <h3 className="text-sm text-[#cfcfcf] md:my-1 sm:my-1">
                Posted on 12 january 2024
              </h3>
              <Link href="/" className="text-sky-300 md:my-2">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full mr-5 rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
            <div className="w-full h-[250px] rounded-2xl graident relative">
              <Image
                src="/assets/HeroBackgroundImage.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
              />
            </div>
            <div className="bg-transparent w-[90%] mx-4 sm:py-4 max-sm:absolute bottom-5">
              <h2 className="text-[#FFFFFF] text-2xl md:mb-2">
                {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <h3 className="text-sm text-[#cfcfcf] md:my-1 sm:my-1">
                Posted on 12 january 2024
              </h3>
              <Link href="/" className="text-sky-300 md:my-2">
                Read More...
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full h-full mr-5 rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
            <div className="w-full h-[250px] rounded-2xl graident relative">
              <Image
                src="/assets/HeroBackgroundImage.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
              />
            </div>
            <div className="bg-transparent w-[90%] mx-4 sm:py-4 max-sm:absolute bottom-5">
              <h2 className="text-[#FFFFFF] text-2xl md:mb-2">
                {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                  0,
                  60
                )}
                ...
              </h2>
              <h3 className="text-sm text-[#cfcfcf] md:my-1 sm:my-1">
                Posted on 12 january 2024
              </h3>
              <Link href="/" className="text-sky-300 md:my-2">
                Read More...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = (context) => {
  const { category } = context.query;

  return {
    props: {
      category,
    },
  };
};

export default index;

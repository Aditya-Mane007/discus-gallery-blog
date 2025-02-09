import React, { useState } from "react";
import Breadcrumb from "@/pages/UI/Components/Breadcrumb/Breadcrumb";
import { modifyTitle } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";

function index({ category }) {
  const [showInfo, setShowInfo] = useState(false);
  const items = [
    { title: "Home", link: "/" },
    { title: "Blog", link: "/blog" },
    { title: modifyTitle(category), link: category, active: true },
  ];

  return (
    <div className="container mx-auto my-8 w-full lg:flex">
      <div
        className="hidden max-lg:flex max-lg:justify-end my-2 max-sm:px-4 cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      >
        <FaInfoCircle
          size={20}
          title={`Click to read about ${modifyTitle(category)}`}
        />
      </div>
      {showInfo && (
        <div className="max-md:px-4">
          <div className="w-[35%] max-lg:w-full h-fit bg-blue lg:sticky md:top-20 mb-8 p-4 rounded-xl max-lg:block hidden ">
            <h1 className="text-[#ffffff] text-4xl font-doner">
              {modifyTitle(category)}
            </h1>
            <h2 className="text-[#cfcfcf] my-4 font-doner text-sm leading-relaxed tracking-wider">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
              aliquid quos necessitatibus saepe neque incidunt aperiam? Vel
              exercitationem et provident architecto asperiores, a tenetur ea,
              modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe,
              reprehenderit, aliquid aut perferendis dolore qui sit architecto
              veniam mollitia id, adipisci deleniti! Ex, voluptatibusr
            </h2>
          </div>
        </div>
      )}

      <div className="w-[35%] max-lg:w-full h-fit bg-blue sticky top-20 md:p-4 rounded-xl lg:block hidden">
        <h1 className="text-[#ffffff] text-4xl font-doner">
          {modifyTitle(category)}
        </h1>
        <h2 className="text-[#cfcfcf] my-4 font-doner text-sm leading-relaxed tracking-wider">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi
          assitatibus saepe neque incidunt aperiam? Vel exercitationem et
          provident architecto asperiores, a tenetur ea, modi, vero dolorem quo
          alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut
          perferendis dolore qui sit architecto veniam mollitia id, adipisci
          deleniti! Ex, voluptatibusr
        </h2>
      </div>
      <div className="lg:pl-4 max-md:px-4">
        <Breadcrumb items={items} />
        <div className="my-8 grid lg:grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4 max-sm:grid-cols-1">
          <div>
            <div className="w-full h-full rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
              <div className="w-full max-sm:h-[250px] max-md:h-[250px] h-[225px] rounded-2xl graident relative">
                <Image
                  src="/assets/HeroBackgroundImage.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
                />
              </div>
              <div className="w-[93%] mx-auto sm:py-4 max-md:mx-4 s max-sm:absolute max-sm:bottom-5 max-sm:left-0">
                <h2 className="text-[#FFFFFF] text-xl md:mb-2 overflow-hidden max-w-[350px] text-ellipsis">
                  {"Water Conditions for discus fish: A Comprehensive Guide"}
                </h2>
                <h3 className="text-xs text-[#cfcfcf] md:my-1 sm:my-1 font-doner tracking-widest">
                  Posted on 12 january 2024
                </h3>
                <Link href="/" className="text-sky-300 md:my-2">
                  Read More...
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
              <div className="w-full max-sm:h-[250px] max-md:h-[250px] h-[225px] rounded-2xl graident relative">
                <Image
                  src="/assets/HeroBackgroundImage.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
                />
              </div>
              <div className="w-[93%] mx-auto sm:py-4 max-md:mx-4 s max-sm:absolute max-sm:bottom-5 max-sm:left-0">
                <h2 className="text-[#FFFFFF] text-xl md:mb-2 overflow-hidden max-w-[350px] text-ellipsis">
                  {"Water Conditions for discus fish: A Comprehensive Guide"}
                </h2>
                <h3 className="text-xs text-[#cfcfcf] md:my-1 sm:my-1 font-doner tracking-widest">
                  Posted on 12 january 2024
                </h3>
                <Link href="/" className="text-sky-300 md:my-2">
                  Read More...
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
              <div className="w-full max-sm:h-[250px] max-md:h-[250px] h-[225px] rounded-2xl graident relative">
                <Image
                  src="/assets/HeroBackgroundImage.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
                />
              </div>
              <div className="w-[93%] mx-auto sm:py-4 max-md:mx-4 s max-sm:absolute max-sm:bottom-5 max-sm:left-0">
                <h2 className="text-[#FFFFFF] text-xl md:mb-2 overflow-hidden max-w-[350px] text-ellipsis">
                  {"Water Conditions for discus fish: A Comprehensive Guide"}
                </h2>
                <h3 className="text-xs text-[#cfcfcf] md:my-1 sm:my-1 font-doner tracking-widest">
                  Posted on 12 january 2024
                </h3>
                <Link href="/" className="text-sky-300 md:my-2">
                  Read More...
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
              <div className="w-full max-sm:h-[250px] max-md:h-[250px] h-[225px] rounded-2xl graident relative">
                <Image
                  src="/assets/HeroBackgroundImage.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
                />
              </div>
              <div className="w-[93%] mx-auto sm:py-4 max-md:mx-4 s max-sm:absolute max-sm:bottom-5 max-sm:left-0">
                <h2 className="text-[#FFFFFF] text-xl md:mb-2 overflow-hidden max-w-[350px] text-ellipsis">
                  {"Water Conditions for discus fish: A Comprehensive Guide"}
                </h2>
                <h3 className="text-xs text-[#cfcfcf] md:my-1 sm:my-1 font-doner tracking-widest">
                  Posted on 12 january 2024
                </h3>
                <Link href="/" className="text-sky-300 md:my-2">
                  Read More...
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full h-full rounded-xl flex md:flex-col md:justify-start md:items-end sm:bg-blue relative Bluegraident">
              <div className="w-full max-sm:h-[250px] max-md:h-[250px] h-[225px] rounded-2xl graident relative">
                <Image
                  src="/assets/HeroBackgroundImage.jpg"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover rounded-xl max-sm:absolute max-sm:-z-10 Bluegraident"
                />
              </div>
              <div className="w-[93%] mx-auto sm:py-4 max-md:mx-4 s max-sm:absolute max-sm:bottom-5 max-sm:left-0">
                <h2 className="text-[#FFFFFF] text-xl md:mb-2 overflow-hidden max-w-[350px] text-ellipsis">
                  {"Water Conditions for discus fish: A Comprehensive Guide"}
                </h2>
                <h3 className="text-xs text-[#cfcfcf] md:my-1 sm:my-1 font-doner tracking-widest">
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

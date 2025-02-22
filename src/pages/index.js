import React, { useEffect, useState } from "react";
import Navbar from "./UI/Components/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import FAQ from "./UI/Components/FAQ/FAQ";
import { fetchData } from "@/utils/utils";

export const CategoryObject = {
  "Care and Maintenance": "care-and-maintenance",
  "Best Food for Discus Fish": "best-food-for-discus-fish",
  "Breeding and Raising Fry": "breeding-and-raising-fry",
  "Health and Diseases": "health-and-diseases",
  "Species and Types": "species-and-types",
};

function index({ categories, posts }) {
  const [tab, setTab] = useState(categories.data[0].title);

  const [blogPosts, setBlogPosts] = useState(posts.data);
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    focusOnSelect: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  const setting = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    focusOnSelect: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: false,
    swipeToSlide: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  const handleTabChange = (text) => {
    setTab(text);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await fetchData(
        process.env.NEXT_PUBLIC_API_URL,
        `/${CategoryObject[tab]}/getPostsByCategories`,
        process.env.NEXT_PUBLIC_JWT_TOKEN
      );

      if (posts) {
        setBlogPosts(posts.data);
      }
    };

    fetchPosts();
  }, [tab]);
  return (
    <>
      <div className="2xl:container 2xl:mx-auto w-full h-[40rem] heroSection ">
        <div className="2xl:container 2xl:mx-auto w-full h-[88.5%] my-auto flex justify-center items-center text-background">
          <div className="md:w-[80%] md:text-5xl text-3xl max-sm:text-4xl text-center font-bold">
            Your guide to Discus fish care, covering diet, water quality,
            maintenance, and thriving aquariums!
          </div>
        </div>
      </div>
      <div className="my-8 container mx-auto w-[95%]">
        <div className="slider-container">
          <Slider {...settings}>
            {categories &&
              categories.data.map((category) => (
                <div>
                  <p
                    className={`py-4 px-6 cursor-pointer mr-1 border-none rounded-full font-doner ${
                      category.title === tab
                        ? "bg-orange hover:opacity-95"
                        : "bg-blue hover:bg-darkBlue"
                    } 
                    text-background
                      border-r-2 border-r-foreground `}
                    style={{ wordSpacing: ".2rem" }}
                    onClick={() => handleTabChange(category.title)}
                  >
                    {category.title}
                  </p>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <div className="container w-[95%] mx-auto my-10">
        <div className="slider-container">
          {blogPosts.length > 0 ? (
            <Slider {...setting}>
              {blogPosts.map((post) => (
                <div className="mr-4">
                  <div className="w-[300px] h-[400px] rounded-2xl relative flex justify-end items-end graident">
                    <div className="w-full h-full rounded-2xl absolute -z-10 ">
                      <Image
                        src="/assets/HeroBackgroundImage.jpg"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover rounded-2xl"
                      />
                    </div>
                    <div className="z-10 bg-transparent  w-[90%] mx-auto my-4 ">
                      <h5 className="text-[#FFFFFF]">
                        posted on 12 january 2024
                      </h5>
                      <h4 className="text-3xl text-[#FFFFFF]">
                        {"Water Conditions for discus fish: A Comprehensive Guide".slice(
                          0,
                          60
                        )}
                        ...
                      </h4>
                      <Link
                        href={`/blog/${CategoryObject[tab]}/${post.slug}`}
                        className="my-2 text-blue"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <p className="my-2 text-center">No Blogs Available</p>
          )}
        </div>
        <Link
          href={`/blog/${tab.replaceAll(" ", "-").toLowerCase()}`}
          className="w-fit bg-orange  flex items-center rounded-xl p-3 text-background mr-4 my-8 font-doner"
          style={{ wordSpacing: ".2rem" }}
        >
          Read All {tab} Blogs
          <MdArrowOutward className="mx-1 text-lg" />
        </Link>
      </div>

      <div id="faq">
        <FAQ />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const categories = await fetchData(
    process.env.NEXT_PUBLIC_API_URL,
    "/getCategories",
    process.env.NEXT_PUBLIC_JWT_TOKEN
  );

  const posts = await fetchData(
    process.env.NEXT_PUBLIC_API_URL,
    `/${categories.data[0].slug}/getPostsByCategories`,
    process.env.NEXT_PUBLIC_JWT_TOKEN
  );

  return {
    props: {
      categories,
      posts,
    },
  };
};

export default index;

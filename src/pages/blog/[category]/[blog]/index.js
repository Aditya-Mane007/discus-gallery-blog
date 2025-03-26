import Breadcrumb from "@/pages/UI/Components/Breadcrumb/Breadcrumb";
import { fetchData, formateDate, modifyTitle } from "@/utils/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import SEO from "@/pages/UI/Components/SEO/SEO";
import Link from "next/link";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function index({ category, slug, post, tags }) {
  const [toc, setToc] = useState([]);
  const [tocVisible, setTocVisible] = useState(true);
  const [htmlContent, setHtmlContent] = useState("");
  const items = [
    { title: "Home", link: "/", icon: true },
    { title: "Blog", link: "/blog", icon: true },
    { title: modifyTitle(category), link: `/blog/${category}`, icon: true },
    {
      title: modifyTitle(slug),
      link: `/blog/${category}/${slug}  `,
      active: true,
    },
  ];

  const generateTableOfContent = (htmlcontent) => {
    const newToc = [];
    const contentDiv = document.createElement("div");

    contentDiv.innerHTML = htmlcontent;

    const headings = contentDiv.getElementsByTagName("h2");

    for (let i = 0; i < headings.length; i++) {
      const tocObject = {
        title: headings[i].innerText,
        id: headings[i].innerText.toLowerCase().replaceAll(" ", "-"),
      };

      headings[i].id = tocObject.id;

      newToc.push(tocObject);
    }

    setToc(newToc);
    setHtmlContent(contentDiv.innerHTML);
  };
  useEffect(() => {
    generateTableOfContent(post.data.content);
  }, [post.data.content]);

  return (
    <>
      <SEO
        title={post.data.title + " | Discus Gallery"}
        description={post.data.excerpt}
        imageURL={post.data.featured_image}
        url={`${process.env.NEXT_PUBLIC_URL}/blog/${category}/${slug}`}
      />
      <div className="container w-[95%] mx-auto pt-8">
        <Breadcrumb items={items} />
        <div className="my-4 md:flex md:px-0">
          <div className="md:w-[60%] w-full">
            <h1 className="md:text-[2.5rem] text-[2rem] font-bold leading-[3rem] font-doner ">
              {post.data.title}
            </h1>
            <span className="flex text-[18px]">
              <h2 className="text-base">
                Posted on {formateDate(post.data.date)}
              </h2>
              <h2 className="mx-2">|</h2>
              <h2>{post.data.author.name}</h2>
            </span>
            {post.data.featured_image && (
              <Image
                src={post.data.featured_image}
                width={1000}
                height={1000}
                alt={post.data.title}
                quality={100}
                className="w-full h-[400px] object-cover my-4 rounded-xl"
                priority={true}
              />
            )}
            <div
              className={`bg-blue p-4 block md:hidden ${
                tocVisible && "pb-1"
              } rounded-xl text-[#ffffff] my-4`}
            >
              <div
                onClick={() => setTocVisible(!tocVisible)}
                className="flex justify-between cursor-pointer"
              >
                <h2 className="text-2xl font-doner font-bold tracking-[.1rem]">
                  Table of content
                </h2>
                <div className="cursor-pointer select-none text-2xl flex items-center">
                  {tocVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>
              <div>
                {tocVisible && (
                  <ul>
                    {toc.map((item) => (
                      <li>
                        <Link href={`#${item.id}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            <div className="md:my-4">
              <div className="text-[1.5rem] font-doner">Tags</div>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <div
                    className="py-1 px-3 bg-blue text-[#ffffff] mr-1 my-1 rounded-xl text-base"
                    key={index}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="md:w-[40%] md:pl-4 md:my-0 my-4 h-auto">
            <div className="bg-blue rounded-xl p-4 md:block hidden">
              <h2 className="text-[1.5rem] font-bold p-0 text-[#E3EFF3] font-doner tracking-[.1rem]">
                Description
              </h2>
              <div
                className="text-[1rem] text-[#ffffff]"
                dangerouslySetInnerHTML={{ __html: post.data.excerpt }}
              />
            </div>
            <div
              className={`bg-blue p-4 hidden md:block ${
                tocVisible && "pb-1"
              } rounded-xl text-[#ffffff] sticky top-[5rem] my-4`}
            >
              <div
                onClick={() => setTocVisible(!tocVisible)}
                className="flex justify-between cursor-pointer"
              >
                <h2 className="text-2xl font-doner font-bold tracking-[.1rem]">
                  Table of content
                </h2>
                <div className="cursor-pointer select-none text-2xl flex items-center">
                  {tocVisible ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
              </div>
              <div>
                {tocVisible && (
                  <ul>
                    {toc.map((item) => (
                      <li>
                        <Link href={`#${item.id}`}>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* <div className="my-4">
            <div>Related Posts</div>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const { category, blog } = context.query;

  const getPostBuSlug = await fetchData(
    process.env.NEXT_PUBLIC_API_URL,
    `/blog/${blog}/getPostBySlug`,
    process.env.NEXT_PUBLIC_JWT_TOKEN
  );

  const tagsObject = getPostBuSlug.data.tags;

  const tags = [];
  for (let x in tagsObject) {
    tags.push(x);
  }

  return {
    props: {
      category,
      slug: blog,
      post: getPostBuSlug,
      tags,
    },
  };
};

export default index;

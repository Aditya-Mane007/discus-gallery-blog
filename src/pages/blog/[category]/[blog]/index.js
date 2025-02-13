import Breadcrumb from "@/pages/UI/Components/Breadcrumb/Breadcrumb";
import { modifyTitle } from "@/utils/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function index() {
  const router = useRouter();
  const [htmlContent, setHtmlContent] = useState("");

  const pathNameArray = router.asPath.split("/").filter(Boolean);

  const items = [
    { title: "Home", link: "/" },
    { title: "Blog", link: "/blog" },
    { title: modifyTitle(pathNameArray[1]), link: `/blog/${pathNameArray[1]}` },
    {
      title: modifyTitle(pathNameArray[2]),
      link: pathNameArray[2],
      active: true,
    },
  ];

  const blog = {
    title: "Water Conditions for discus fish: A Comprehensive Guide",
    date: "12 january,2024",
    author: "Aditya Mane",
    htmlString: `
    <h1>Hello Wrold</h1>
    `,
  };

  useEffect(() => {
    setHtmlContent(blog.htmlString);
  }, []);
  return (
    <div className="container mx-auto py-2">
      <Breadcrumb items={items} />
      <div className="my-2">
        <div className="w-[70%]">
          <h1 className="text-[2.5rem] font-bold">{blog.title}</h1>
          <h2 className="text-base">
            {blog.date}
            {blog.author}
          </h2>
          <h2 className="text-[1.5rem]">Hello World</h2>
          <h3 className="text-[1.2rem]">Hello World</h3>

          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
        <div className="w-[30%]"></div>
      </div>
    </div>
  );
}

export default index;

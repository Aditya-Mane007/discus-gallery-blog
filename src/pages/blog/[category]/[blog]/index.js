import Breadcrumb from "@/pages/UI/Components/Breadcrumb/Breadcrumb";
import { fetchData, formateDate, modifyTitle } from "@/utils/utils";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./blog.module.css";
import Image from "next/image";

function index({ category, slug, post, tags }) {
  const [htmlContent, setHtmlContent] = useState();

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

  return (
    <>
      <div className="container w-[95%] mx-auto pt-8">
        <Breadcrumb items={items} />
        <div className="my-4 md:flex px-4 md:px-0">
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
              <img
                src={post.data.featured_image}
                width={100}
                height={100}
                alt={post.data.title}
                className="w-full h-[400px] object-cover my-4 rounded-xl"
              />
            )}

            <div
              className={styles.blogContent}
              dangerouslySetInnerHTML={{ __html: post.data.content }}
            >
              {/* <p className={styles.paragraph}>
                Discus fish (Symphysodon) are known as the “Kings of the
                Aquarium” due to their stunning colors and graceful movement.
                However, their beauty comes with a need for strict water
                conditions to ensure their health and longevity. In this guide,
                we’ll explore everything you need to know about maintaining the
                perfect water parameters for Discus fish and how to create a
                thriving environment for them.
              </p>
              <h2 className={styles.Headiing2}>
                Why Water Quality is Critical for Discus Fish?
              </h2>
              <p className={styles.Heading2Paragraph}>
                Discus fish originate from the soft, warm waters of the Amazon
                River Basin, where water conditions are stable and pristine.
                Unlike hardy species, Discus are sensitive to fluctuations in
                pH, temperature, and water hardness, making it essential to
                maintain a stable and clean habitat. Poor water conditions can
                lead to stress, diseases, and even death.
              </p>

              <hr />

              <h2 className={styles.Headiing2}>
                Ideal Water Parameters for Discus Fish
              </h2>
              <p className={styles.Heading2Paragraph}>
                To mimic their natural habitat, ensure that your{" "}
                <strong>aquarium water</strong> meets the following parameters:
              </p>
              <h4 className={styles.listTitle}>
                1. Temperature: 82-86°F (28-30°C)
              </h4>
              <ul className={styles.listUl}>
                <li>
                  Discus fish thrive in warm water, which aids in digestion,
                  immunity, and metabolism.
                </li>

                <li>
                  Using a high-quality aquarium heater with a thermostat helps
                  maintain a consistent temperature.
                </li>
              </ul>
              <h4 className={styles.listTitle}>
                <strong>2. pH Level: 6.0 – 7.0</strong>
              </h4>
              <ul className={styles.listUl}>
                <li>Soft, slightly acidic water is best for Discus.</li>

                <li>
                  Avoid sudden pH swings, as they can cause shock and stress.
                </li>

                <li>Test water regularly using a pH test kit.</li>
              </ul>
              <h4 className={styles.listTitle}>
                <strong>
                  3. Water Hardness: 1-4 dGH (Very Soft to Soft Water)
                </strong>
              </h4>
              <ul className={styles.listUl}>
                <li>Discus prefer soft water with low mineral content.</li>

                <li>
                  Reverse osmosis (RO) water can be used to reduce hardness if
                  your tap water is too hard.
                </li>
              </ul>
              <h4 className={styles.listTitle}>
                <strong>4. Ammonia, Nitrites, and Nitrates</strong>
              </h4>
              <ul className={styles.listUl}>
                <li>
                  Ammonia and Nitrites: 0 ppm (Highly toxic, must be
                  eliminated).
                </li>

                <li>
                  Nitrates: Below 10-20 ppm (High levels can cause health
                  issues).
                </li>

                <li>
                  Regular water changes (at least 30-50% weekly) help keep these
                  toxins in check.
                </li>
              </ul>
              <hr />
              <h2 className={styles.Headiing2}>
                How to Maintain Optimal Water Conditions
              </h2>
              <h3 className={styles.listTitle}>
                <strong>1. Regular Water Changes</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>
                  Frequent water changes help maintain water quality and remove
                  toxins.
                </li>

                <li>
                  Change 30-50% of the water weekly with dechlorinated or RO
                  water.
                </li>
              </ul>
              <h3 className={styles.listTitle}>
                <strong>2. High-Quality Filtration System</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>
                  Use a sponge filter or canister filter to maintain
                  crystal-clear water.
                </li>

                <li>
                  Avoid excessive water flow, as Discus prefer calm waters.
                </li>
              </ul>
              <h3 className={styles.listTitle}>
                <strong>3. Proper Tank Cycling</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>
                  New tanks should be fully cycled before adding Discus fish.
                </li>

                <li>Beneficial bacteria help break down harmful toxins.</li>
              </ul>
              <h3 className={styles.listTitle}>
                <strong>4. Use of Indian Almond Leaves or Peat Moss</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>
                  These naturally soften water and lower pH, making the
                  environment ideal for Discus.
                </li>

                <li>
                  They also release tannins, which have antibacterial
                  properties.
                </li>
              </ul>
              <h3 className={styles.listTitle}>
                <strong>5. Monitor Water Quality Regularly</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>
                  Use test kits to check pH, ammonia, nitrite, nitrate, and
                  hardness levels.
                </li>

                <li>
                  Invest in a digital thermometer for accurate temperature
                  readings.
                </li>
              </ul>
              <h2 className={styles.Headiing2}>
                Common Water-Related Problems &amp; Solutions
              </h2>
              <h3 className={styles.listTitle}>
                <strong>1. Cloudy Water</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>Cause: Bacterial bloom or overfeeding.</li>

                <li>
                  Solution: Reduce feeding, increase water changes, and check
                  filtration.
                </li>
              </ul>
              <h3 className={styles.listTitle}>
                <strong>2. High Ammonia or Nitrite Levels</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>Cause: Overcrowding, overfeeding, or an uncycled tank.</li>

                <li>
                  Solution: Perform water changes, add beneficial bacteria, and
                  check biofiltration.
                </li>
              </ul>
              <h3 className={styles.listTitle}>
                <strong>3. pH Swings</strong>
              </h3>
              <ul className={styles.listUl}>
                <li>
                  Cause: Using untreated tap water, CO2 fluctuations, or
                  inconsistent maintenance.
                </li>

                <li>
                  Solution: Always use a consistent water source, test pH
                  regularly, and make gradual adjustments.
                </li>
              </ul>
              <h2 className={styles.Headiing2}>Conclusion</h2>
              <p className={styles.Heading2Paragraph}>
                Maintaining the perfect water conditions is key to keeping
                Discus fish healthy, vibrant, and stress-free. Regular
                monitoring, proper filtration, and consistent maintenance will
                ensure your Discus thrive in their aquarium. By following these
                guidelines, you can create a stable and natural environment that
                mimics their Amazonian origins.
              </p> */}
            </div>
          </div>
          <div className="md:w-[40%] md:pl-4 md:my-0 my-4 h-fit sticky top-[4.5rem]">
            <div className="bg-blue rounded-xl p-4 md:block hidden">
              <h2 className="text-[1.5rem] font-bold p-0 text-[#E3EFF3] font-doner tracking-[.1rem]">
                Description
              </h2>
              <div
                className="text-[1rem] text-[#ffffff]"
                dangerouslySetInnerHTML={{ __html: post.data.excerpt }}
              />
            </div>
            <div className="md:my-4">
              <div className="text-[1.5rem] font-doner">Tags</div>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <div className="py-1 px-3 bg-blue text-[#ffffff] mr-1 my-1 rounded-xl text-base">
                    {tag}
                  </div>
                ))}
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

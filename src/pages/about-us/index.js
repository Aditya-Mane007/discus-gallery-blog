import React from "react";
import { LuEarth } from "react-icons/lu";

import { AiOutlineYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";

const whatWeCover = [
  "✅ Care & Maintenance – Learn the best practices for water quality,tank setup, and overall discus health.",
  "✅ Feeding & Nutrition – Discover the best diet plans, high-quality foods, and feeding schedules for healthy discus fish.",
  "✅ Species & Types – Explore the different discus fish varieties, their unique colors, and how to choose the best for your aquarium.",
  "✅ Health & Diseases – Get expert advice on identifying, preventing, and treating common discus diseases.",
  "✅ Breeding & Fry Care – Understand the breeding process, fry care, and tips for raising healthy discus babies.",
];

const socialLinks = [
  {
    icon: <LuEarth />,
    Link: "https://www.discusgallery.in",
  },
  {
    icon: <AiOutlineYoutube size={30} />,
    Link: "https://www.youtube.com/@discusgallery4013",
  },
  {
    icon: <FaInstagram />,
    Link: "https://www.instagram.com/adityamane.jsx/",
  },
  // Website: "DiscusGallery.in",
  // Facebook: facebook.com / DiscusGallery,
  // Instagram: instagram.com / DiscusGallery,
  // YouTube: youtube.com / DiscusGallery,
];

function page() {
  return (
    <div className="container mx-auto my-4 p-4 md:p-0">
      <div>
        <h1 className="text-2xl font-doner font-semibold tracking-wider">
          About Us
        </h1>
        <p className="text-lg w-full md:w-[80%]">
          Welcome to Discus Gallery, your ultimate destination for everything
          related to discus fish! Whether you’re a beginner or an experienced
          aquarist, our blog is dedicated to providing in-depth knowledge and
          expert guidance on discus fish care, maintenance, feeding, species,
          medicines, and more.
        </p>
      </div>

      <div className="my-4">
        <h1 className="text-2xl font-doner font-semibold tracking-wider">
          Our Mission
        </h1>
        <p className="text-lg w-full md:w-[80%]">
          At Discus Gallery, we aim to create a community where discus fish
          enthusiasts can find reliable, well-researched, and practical advice.
          Keeping discus fish requires patience, knowledge, and the right
          techniques, and we’re here to help you every step of the way.
        </p>
      </div>

      <div className="my-4">
        <h1 className="text-2xl font-doner font-semibold tracking-wider">
          What We Cover
        </h1>
        <div className="text-lg w-full">
          <ul>
            {whatWeCover.map((item) => (
              <li className="">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-4">
        <h1 className="text-2xl font-doner font-semibold tracking-wider">
          Why Trust Us?
        </h1>
        <p className="text-lg w-full md:w-[80%]">
          We are passionate about discus fish and committed to sharing accurate
          and practical information. Our content is backed by research,
          experience, and insights from expert aquarists to help you create the
          best environment for your discus fish. Join us on this journey to
          explore the fascinating world of discus fish and build a thriving
          aquarium! 🚀 Stay connected with us for the latest tips, guides, and
          updates.
        </p>
      </div>

      <div className="my-4">
        <h1 className="text-2xl font-doner font-semibold tracking-wider">
          Connect With Us
        </h1>
        <p className="text-lg w-full md:w-[80%]">
          Stay updated with our latest blogs, tips, and discus fish care guides
          by following us on social media:
        </p>
        <ul className="my-4 flex items-center">
          {socialLinks.map((link) => (
            <Link
              href={link.Link}
              title={link.Link}
              className="text-2xl text-[#212121] mr-4 flex"
            >
              {link.icon}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;

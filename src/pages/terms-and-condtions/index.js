import React from "react";
import SEO from "../UI/Components/SEO/SEO";
import Link from "next/link";
import { socialLinks } from "@/utils/utils";

function index() {
  return (
    <>
      <SEO
        title="Tearms & Conditions | Discus Gallery"
        description=" Welcome to Discus Gallery, your ultimate destination for everything
        related to discus fish! Whether you’re a beginner or an experienced
        aquarist, our blog is dedicated to providing in-depth knowledge and
        expert guidance on discus fish care, maintenance, feeding, species,
        medicines, and more."
        imageURL={`${process.env.NEXT_PUBLIC_URL}/assets/HeroBackgroundImage.webp`}
        url={`${process.NEXT_PUBLIC_URL}`}
      />
      <div className="container mx-auto my-4 p-4 md:p-0">
        <div>
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Tearms & Conditions
          </h1>
          <p className="text-lg w-full">
            Welcome to Discus Gallery, your ultimate destination for everything
            related to discus fish! Whether you’re a beginner or an experienced
            aquarist, our blog is dedicated to providing in-depth knowledge and
            expert guidance on discus fish care, maintenance, feeding, species,
            medicines, and more.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Use of Our Website
          </h1>
          <p className="text-lg w-full">
            By accessing <Link href="/">discusgallery.in</Link>, you agree to
            comply with our terms. All the content we provide is for
            informational purposes, aimed at helping you better care for your
            discus fish
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Intellectual Property Rights
          </h1>
          <p className="text-lg w-full">
            All content, including images, videos, and text, is the property of
            <Link href="/">discusgallery.in</Link>. Unauthorized reproduction,
            copying, or distribution is strictly prohibited.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Liability Disclaimer
          </h1>
          <p className="text-lg w-full">
            While we make every effort to ensure accuracy, we are not liable for
            any errors or omissions in our content. Any actions taken based on
            the information provided are at your own risk.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Third-Party Content
          </h1>
          <p className="text-lg w-full">
            Our website may feature links to external resources. We are not
            responsible for the accuracy or reliability of these third-party
            sites.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Connect With Us
          </h1>
          <p className="text-lg w-full">
            Stay updated with our latest blogs, tips, and discus fish care
            guides by following us on social media:
          </p>
          <ul className="my-4 flex items-center">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
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
    </>
  );
}

export default index;

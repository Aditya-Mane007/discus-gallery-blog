import React from "react";
import SEO from "../UI/Components/SEO/SEO";
import Link from "next/link";
import { socialLinks } from "@/utils/utils";

function index() {
  return (
    <>
      <SEO
        title="Disclaimer | Discus Gallery"
        description=" Welcome to Discus Gallery, your ultimate destination for everything
        related to discus fish! Whether you’re a beginner or an experienced
        aquarist, our blog is dedicated to providing in-depth knowledge and
        expert guidance on discus fish care, maintenance, feeding, species,
        medicines, and more."
        imageURL={`${process.env.NEXT_PUBLIC_URL}/assets/HeroBackgroundImage.jpg`}
        url={`${process.NEXT_PUBLIC_URL}`}
      />
      <div className="container mx-auto my-4 p-4 md:p-0">
        <div>
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Disclaimer
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
            For Informational Purposes Only
          </h1>
          <p className="text-lg w-full">
            The content provided on <Link href="/">discusgallery.in</Link>, is
            intended for general informational and educational purposes. It is
            not meant to replace professional advice regarding pet care,
            veterinary issues, or breeding methods.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Accuracy and Updates
          </h1>
          <p className="text-lg w-full">
            We strive to ensure that the information provided is up-to-date and
            reliable. However, care techniques and practices can vary, and we
            encourage readers to conduct additional research or consult experts
            where necessary.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Liability Limitation
          </h1>
          <p className="text-lg w-full">
            <Link href="/">discusgallery.in</Link>, While we make every effort
            to ensure accuracy, we are not liable for any errors or omissions in
            our content. Any actions taken based on the information provided are
            at your own risk.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Connect With Us
          </h1>
          <p className="text-lg w-full">
            shall not be held responsible for any damages, injuries, or losses
            arising from the application of the information provided on this
            site. Users should exercise discretion and seek professional advice
            when in doubt.
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

import React from "react";
import SEO from "../UI/Components/SEO/SEO";
import Link from "next/link";
import { socialLinks } from "@/utils/utils";

function index() {
  return (
    <>
      <SEO
        title="Privacy Policy | Discus Gallery"
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
            Privacy Policy
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
            Your Privacy Is Our Priority
          </h1>
          <p className="text-lg w-full">
            We value your trust and are committed to protecting your privacy.
            This policy explains how we handle your personal information when
            you visit our site.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Information We Collect
          </h1>
          <p className="text-lg w-full">
            When you browse our website, we may collect non-personal data such
            as your IP address, browser type, and the pages you visit. If you
            submit a form, we will collect personal details like your name,
            email address, and message for the sole purpose of addressing your
            inquiry.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Use of Information
          </h1>
          <p className="text-lg w-full">
            The data we collect helps us improve your experience on our site,
            respond to your queries, and analyze user behavior to enhance our
            content. Rest assured, we do not share or sell your personal
            information to third parties.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Cookies and Analytics
          </h1>
          <p className="text-lg w-full">
            Our site uses cookies to provide a personalized experience and
            gather analytics data. You can opt out of cookies via your browser
            settings.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Your Rights
          </h1>
          <p className="text-lg w-full">
            You have the right to request access to your personal data, and if
            needed, request its removal. Feel free to contact us for any
            concerns regarding your privacy.
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

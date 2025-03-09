import React from "react";
import SEO from "../UI/Components/SEO/SEO";
import Link from "next/link";
import { socialLinks } from "@/utils/utils";

function index() {
  return (
    <>
      <SEO
        title="Contact Us | Discus Gallery"
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
            Contact Us
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
            We’d Love to Hear from You!
          </h1>
          <p className="text-lg w-full">
            At <Link href="/">discusgallery.in</Link>, we believe in building a
            community of like-minded discus fish enthusiasts. Your feedback,
            questions, and ideas help us improve and provide better content
            tailored to your needs.
          </p>

          <p>
            If you have any inquiries regarding discus fish care or would like
            to discuss collaborations or advertising opportunities, feel free to
            use the contact form below.
          </p>
        </div>

        <div className="my-4">
          <h1 className="text-2xl font-doner font-semibold tracking-wider">
            Reach Out Directly
          </h1>
          <p className="text-lg w-full">
            Prefer to connect personally? Send us an email at
            <Link href="mailto:adityamane27023@gmail.com">
              adityamane27023@gmail.com
            </Link>
            Follow us on social media to stay updated with our latest posts and
            behind-the-scenes content:
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
          <p className="text-lg w-full">
            Your message matters to us, and we’ll get back to you as soon as
            possible!
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

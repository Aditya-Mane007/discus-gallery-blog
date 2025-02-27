import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Head from "next/head";

const Faqs = [
  {
    question: "What are the best tank conditions for discus fish?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibus",
  },
  {
    question: "What is the best food for discus fish?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibus",
  },
  {
    question: "How to care for discus fish as a beginner?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibusr",
  },
  {
    question: "Why are my discus fish not eating?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibus",
  },

  {
    question: "How do you breed discus fish?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibus",
  },
  {
    question: "What fish are compatible with discus fish?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibusr",
  },
  {
    question: "Why are discus fish so expensive?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nisi aliquid quos necessitatibus saepe neque incidunt aperiam? Vel exercitationem et provident architecto asperiores, a tenetur ea, modi, vero dolorem quo alias! Porro, fuga laudantium. Saepe, reprehenderit, aliquid aut perferendis dolore qui sit architecto veniam mollitia id, adipisci deleniti! Ex, voluptatibus",
  },
];

function FAQ() {
  const [faqIndex, setFaqIndex] = useState(null);

  const generateFAQSchama = () => {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: Faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    };
  };

  console.log(generateFAQSchama());
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateFAQSchama()),
          }}
        />
      </Head>
      <div className="bg-darkBlue py-8">
        <div className="container mx-auto">
          <div
            className="text-4xl text-center font-bold text-background my-8 font-doner tracking-wider"
            style={{ wordSpacing: ".2rem" }}
          >
            Frequently Asked Questions
          </div>
          <div className="md:w-[70%] w-[95%] mx-auto y-12">
            {Faqs.map((faq, index) => (
              <div
                className="text-background my-4 cursor-pointer bg-blue rounded-xl"
                key={index}
              >
                <div
                  className={`p-4 flex items-center justify-between  ${
                    faqIndex == index
                      ? "bg-orange rounded-t-xl"
                      : "bg-blue rounded-xl"
                  }`}
                  onClick={() => setFaqIndex(index == faqIndex ? null : index)}
                >
                  {faq.question}{" "}
                  {faqIndex == index ? (
                    <FaMinus className="mx-0" />
                  ) : (
                    <FaPlus />
                  )}
                </div>
                <div
                  className={`px-4 overflow-hidden ${
                    faqIndex == index ? "max-h-[1000px] pt-2 pb-4" : "max-h-0"
                  } ease-linear`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQ;

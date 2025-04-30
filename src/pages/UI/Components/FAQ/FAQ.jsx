import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import Head from "next/head";

const Faqs = [
  {
    question: "How to keep discus fish?",
    answer:
      "Keeping discus fish requires maintaining stable water conditions, providing a high-protein diet, and ensuring a stress-free environment. They thrive in warm, clean water with low ammonia and nitrate levels. A peaceful tank with compatible tank mates is also important. With proper care and routine maintenance, discus fish can live long and healthy lives. To learn more, check out our <a href='/blog/care-and-maintenance' style='color:#A5783D;font-weight: bold;'>Care and Maintenance</a> for a detailed guide.",
  },
  {
    question: "Are discus fish hard to take care of?",
    answer:
      "<p>Discus fish require more attention than typical freshwater fish, but with the right knowledge and routine, they can be managed successfully. Their main challenge is maintaining stable water conditions and providing a proper diet. If you're interested in a detailed guide on caring for discus fish, check out our blogs <a href='/blog/care-and-maintenance' style='color:#A5783D;font-weight: bold;'>Care and Maintenance</a><p>",
  },
  {
    question: "What do discus fish eat?",
    answer:
      "<p>Discus fish are primarily carnivores. In the wild, they consume algae, shrimp, and small fish anything that fits in their mouth. In a home aquarium, they can be fed high-quality pellets, flakes, algae wafers, and freeze-dried worm cubes. Bloodworms are also a good option, but ensure they are properly sterilized. Some aquarists use animal heart paste, though it is not generally recommended for long-term health. checkout <a href='/blog/best-food-for-discus-fish' style='color:#A5783D;font-weight: bold;'>Best Food for Discus Fish</a></p>",
  },
  {
    question: "Will discus fish eat plants?",
    answer:
      "<p>Discus fish are not primarily plant eaters, but they may occasionally nibble on soft plants or algae. They usually do this out of curiosity rather than as a main food source. If they are well-fed with a balanced diet of pellets, flakes, and live or frozen foods, they are unlikely to damage aquarium plants. However, choosing hardy plants like Anubias, Java Fern, or Amazon Sword can help maintain a planted tank without issues.<p/>",
  },

  {
    question: "Why do discus fish eat their eggs?",
    answer:
      "<p>Discus fish may eat their own eggs due to stress, environmental factors, or instinct. If they feel threatened by other fish in the tank, they might consume the eggs to prevent them from being eaten by predators. Sudden disturbances, such as loud noises or abrupt changes in water conditions, can also trigger this behavior. Additionally, if the parents are inexperienced or exhausted from guarding the eggs, they may see them as a quick source of energy. In some cases, first-time parents may eat their eggs simply due to inexperience, but they usually improve with future spawning. checkout all blogs related to <a href='/blog/breeding-and-raising-fry' style='color:#A5783D;font-weight: bold;'>Breeding and Raising Fry</a>.</p>",
  },
  {
    question: "Which fish can live with discus?",
    answer:
      "Discus fish do best with peaceful, slow-moving tank mates that can tolerate warm water temperatures. Good companions include tetras (like cardinal or rummy-nose tetras), Corydoras catfish, and certain dwarf cichlids. Avoid aggressive or overly active fish that may stress them out. For a full list of compatible species, check out our <a href='/blog/species-and-types' style='color:#A5783D;font-weight: bold;' >Species and Types</a>",
  },
  {
    question: "Why are discus fish so expensive?",
    answer:
      "<p>Discus fish are expensive due to their complex breeding process, specific care requirements, and the time it takes for them to reach a sellable size. High-quality discus strains require selective breeding, which adds to the cost. Additionally, their need for pristine water conditions and specialized diets increases maintenance costs for breeders. Their unique colors and patterns also contribute to their high market value.</p>",
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
            className="text-4xl text-center font-bold text-[#ffffff] my-8 font-doner tracking-wider"
            style={{ wordSpacing: ".2rem" }}
          >
            Frequently Asked Questions
          </div>
          <div className="md:w-[70%] w-[95%] mx-auto y-12">
            {Faqs.map((faq, index) => (
              <div
                className="text-[#ffffff] my-4 cursor-pointer bg-blue rounded-xl"
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
                  {faq.question}
                  {faqIndex == index ? (
                    <FaMinus className="mx-0" />
                  ) : (
                    <FaPlus />
                  )}
                </div>
                <div
                  className={`px-4 overflow-hidden cursor-auto ${
                    faqIndex == index ? "max-h-[1000px] pt-2 pb-4" : "max-h-0"
                  } ease-linear`}
                >
                  <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
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

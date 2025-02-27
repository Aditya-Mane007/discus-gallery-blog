import Head from "next/head";
import React from "react";

function SeoConfig({ title, description, image, url }) {
  return (
    <Head>
      <title>{title} | Discus Gallery</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="discus fish care, discus fish food, discus fish maintenance, discus fish species, discus fish types, discus fish diseases, discus fish breeding, discus fish tank setup, discus fish fry care, best food for discus fish, how to take care of discus fish, best tank mates for discus fish, discus fish water parameters, discus fish temperature requirements, how to breed discus fish, discus fish diet and nutrition, common discus fish diseases and treatments, how to maintain a discus fish aquarium, discus fish behavior and stress signs, best medicines for discus fish, discus fish tank, discus fish keeping, discus fish guide, discus fish price, discus fish for beginners, discus fish health, discus fish farming, discus fish facts, discus fish problems, discus fish lifespan, discus fish water change, discus fish tank setup guide, discus fish filtration, discus fish pH level, discus fish ideal temperature, discus fish hard water vs. soft water, discus fish stress signs, discus fish tank maintenance, discus fish lighting requirements, best food for discus growth, homemade discus fish food, how often to feed discus fish, high-protein food for discus, live food for discus fish, discus fish feeding schedule, frozen food vs. dry food for discus, feeding discus fish fry, how to breed discus fish at home, discus fish breeding conditions, discus fish egg care, discus fish spawning behavior, raising discus fry, discus fry tank setup, best food for discus fry, how to care for baby discus fish, discus fish white poop, discus fish hole in the head disease, discus fish fin rot treatment, discus fish bloating cure, common discus fish parasites, discus fish ich treatment, natural remedies for discus fish, discus fish stress treatment, discus fish quarantine process"
      />
      <meta name="author" content="Aditya Mane" />
      <link rel="canonical" href={process.env.NEXT_PUBLIC_URL + url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://discusgallery.in`} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}

export default SeoConfig;

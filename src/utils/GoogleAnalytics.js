import Script from "next/script";
import React, { useEffect } from "react";

export function AdInitializer() {
  useEffect(() => {
    if (typeof window !== "undefined" && !window.adsbygoogleInitialized) {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({
        google_ad_client: "ca-pub-3441215479960974",
        enable_page_level_ads: true,
      });
      window.adsbygoogleInitialized = true;
    }
  }, []);

  return null;
}

function GoogleAnalytics() {
  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-YZB88V0FK9"
      />

      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YZB88V0FK9', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      <AdInitializer />

      {/* <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3441215479960974"
        crossOrigin="anonymous"
      ></Script>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
         (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-3441215479960974",
            enable_page_level_ads: true
         });
         `,
        }}
      /> */}
    </>
  );
}

export default GoogleAnalytics;

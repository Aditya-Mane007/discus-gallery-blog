import Script from "next/script";
import React from "react";

function GoogleAnalytics() {
  return (
    <>
      {/* Load the Google Analytics script */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YZB88V0FK9"
      />

      {/* Initialize Google Analytics */}
      <Script
        id="google-analytics"
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
    </>
  );
}

export default GoogleAnalytics;

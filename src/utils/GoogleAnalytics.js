import Script from "next/script";
import React from "react";

function GoogleAnalytics() {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YZB88V0FK9"
      />
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-YZB88V0FK9');
      </Script>
    </>
  );
}

export default GoogleAnalytics;

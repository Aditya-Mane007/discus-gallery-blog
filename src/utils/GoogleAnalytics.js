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
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="GnRomsRqNrKKJm8PWcFbng"
        async
      />
      {/* <Script
        dangerouslySetInnerHTML={{
          __html: `(function(d,z,s){s.src='https://'+d+'/400/'+z;try{(document.body||document.documentElement).appendChild(s)}catch(e){}})('vemtoutcheeg.com',9098258,document.createElement('script'))`,
        }}
      /> */}
    </>
  );
}

export default GoogleAnalytics;

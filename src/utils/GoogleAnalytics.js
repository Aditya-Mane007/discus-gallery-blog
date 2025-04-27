import Script from "next/script";
import React from "react";

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
      <Script
        src="https://analytics.ahrefs.com/analytics.js"
        data-key="GnRomsRqNrKKJm8PWcFbng"
        strategy="afterInteractive"
      />

      <Script
        type="module"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
          const firebaseConfig = {
            apiKey: "AIzaSyABVMLibij5OF_RVvtJH3kIerhVZoFagHs",
            authDomain: "discusgalleryblog-pn.firebaseapp.com",
            projectId: "discusgalleryblog-pn",
            storageBucket: "discusgalleryblog-pn.firebasestorage.app",
            messagingSenderId: "963540924376",
            appId: "1:963540924376:web:34df7633ff82c18695a4ad"
          };
          const app = initializeApp(firebaseConfig);
        `,
        }}
      ></Script>
    </>
  );
}

export default GoogleAnalytics;

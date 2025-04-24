import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Changa+One:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3441215479960974"
          crossOrigin="anonymous"
        ></script>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3441215479960974"
          data-ad-slot="4255819050"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (adsbygoogle = window.adsbygoogle || []).push({});
        `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

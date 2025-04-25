import React, { useEffect } from "react";

function AdComponent() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("Ads By Google Error : ", error);
    }
  }, []);
  return (
    <div className="w-full ">
      <div className="container mx-auto">
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-3441215479960974"
          data-ad-slot="4255819050"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
    </div>
  );
}

export default AdComponent;

import React from "react";
import { SponsorRow } from "./SponsorRow";

export const Sponsors = () => {
  return (
    <section id="sponsors">
      <h1 className="text-center text-glow text-3xl md:text-6xl font-semibold text-white pb-8">
        meet our sponsors
      </h1>
      <div className="flex flex-col items-center gap-10 mt-10">
        <SponsorRow
          imgArr={[
            { name: "devfolio", url: "https://devfolio.co/" },
            { name: "polygon", url: "https://polygon.technology/" },
            { name: "solana", url: "https://solana.com " },
          ]}
        />
        <SponsorRow
          imgArr={[
            { name: "filecoin", url: "https://filecoin.io/" },
            { name: "replit", url: "https://replit.com/" },
            // { name: "sawo-labs", url: "https://docs.sawolabs.com/sawo/" },
          ]}
        />
      </div>
    </section>
  );
};

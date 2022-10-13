import React from "react";
import { SponsorRow } from "./SponsorRow";

export const Sponsors = () => {
  return (
    <section id="sponsors">
      <h1 className="text-center text-3xl md:text-6xl font-semibold text-white pb-8">
        our sponsors
      </h1>
      <div className="flex flex-col items-center gap-10 mt-10">
        <SponsorRow
          imgArr={[
            { name: "digital-ocean", url: "https://www.digitalocean.com/" },
            { name: "devfolio", url: "https://devfolio.co/" },
          ]}
        />
        <SponsorRow
          imgArr={[
            { name: "sawo-labs", url: "https://docs.sawolabs.com/sawo/" },
            { name: "filecoin", url: "https://filecoin.io/" },
            { name: "replit", url: "https://replit.com/" },
          ]}
        />
        <SponsorRow
          imgArr={[{ name: "deepsource", url: "https://deepsource.io/" }]}
        />
      </div>
    </section>
  );
};

import React from "react";
import { DisclosureComponent } from "./DisclosureComponent";

export const FAQ = () => {
  return (
    <div className="max-w-xl mx-auto gap-10" id="faqs">
      <h1 className="text-center text-3xl md:text-6xl max-w-[15ch] mx-auto font-semibold text-white pb-8">
        frequently asked questions
      </h1>
      <div className="mx-auto rounded-2xl transition-all delay-100 ease-in mt-6">
        <DisclosureComponent heading={"What is DevSprint '22?"}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            praesentium maiores harum, in id voluptatem ducimus, voluptate
            facilis debitis fugiat quisquam asperiores, libero voluptates at
            possimus eius esse quis. Dignissimos.
          </p>
        </DisclosureComponent>
        <DisclosureComponent
          heading={"Do I need to pay a registration fee for the hackathon?"}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
            dolores maiores error reprehenderit, ex culpa magni exercitationem,
            officiis, cupiditate atque maxime nemo in libero totam iusto.
            Tenetur, hic? Ipsum, perferendis.
          </p>
        </DisclosureComponent>
        <DisclosureComponent heading={"How to register for DevSprint '22?"}>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            ut maxime eum neque iusto unde, perferendis sint exercitationem
            autem corporis consectetur ducimus reiciendis odit, sunt soluta
            voluptates accusamus veniam placeat?
          </p>
        </DisclosureComponent>
      </div>
    </div>
  );
};

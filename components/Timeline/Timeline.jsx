import React from "react";
import { TimelineCard } from "./TimelineCard";
import { TimelineDay } from "./TimelineDay";

export const Timeline = () => {
  return (
    <div className="mx-auto md:flex md:gap-20">
      <h1 className="text-center md:self-center text-3xl md:text-6xl font-semibold text-white pb-8">
        timeline
      </h1>
      <div>
        <div className="text-white mt-6 mx-auto" id="timeline">
          <ol className="relative border-l border-gray-200">
            <TimelineCard
              heading={"Registration Starts"}
              timing={"16th October, 2022"}
              dotColor={"bg-[#4283F3]"}
              E94336
            />
            <TimelineCard
              heading={"Registration Ends"}
              timing={"30th October, 2022"}
              dotColor={"bg-[#E94336]"}
            />
          </ol>
        </div>
        <div className="text-white mt-6 mx-auto" id="timeline">
          <ol className="relative border-l border-gray-200">
            <TimelineDay day={1} date={"5th November, 2022"} />
            <TimelineCard
              heading={"Team Check-In and Opening Ceremony"}
              timing={"9AM to 10AM"}
              dotColor={"bg-[#FABB08]"}
            />
            <TimelineCard
              heading={"Hacking Starts!"}
              timing={"10AM to 5PM"}
              dotColor={"bg-[#00A150]"}
            />
            <TimelineDay day={2} date={"6th November, 2022"} />
            <TimelineCard
              heading={"Hacking Continues"}
              timing={"9AM to 12PM"}
              dotColor={"bg-[#E94336]"}
            />
            <TimelineCard
              heading={"Preliminary Round of Judging"}
              timing={"12PM to 2PM"}
              dotColor={"bg-[#4283F3]"}
            />
            <TimelineCard
              heading={"Presentations From Top 7 Teams"}
              timing={"3PM to 5PM"}
              dotColor={"bg-[#FABB08]"}
            />
            <TimelineCard
              heading={"Closing Ceremony!"}
              timing={"5PM to 5.30PM"}
              dotColor={"bg-[#00A150]"}
            />
          </ol>
        </div>
      </div>
    </div>
  );
};

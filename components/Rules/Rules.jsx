import React from "react";

export const Rules = () => {
  return (
    <div className="text-white flex flex-col justify-center w-full md:max-w-5xl mx-auto">
      <h1 className="text-center text-3xl md:text-6xl font-semibold text-white pb-8">
        rules
      </h1>
      <div className="mx-4">
        <ul className="pl-10 text-xl font-Inter list-disc flex flex-col gap-4 max-w-3xl mx-auto leading-7 text-white">
          <li>Each team can have a minimum of 3 and maximum of 5 members</li>
          <li>
            Each team should have one team leader, who will be responsible for
            forwarding all necessary information to his/her team.
          </li>
          <li>
            Each team has to select 1 track of their choice out of the 4 given
            tracks and provide a problem statement relevant to that track while
            registering. No team can change their track and/or problem statement
            once registered.
          </li>
          <li>
            We expect all team members to be present at the Team Check-In on Day
            1. A team won&apos;t be registered if all the members are not
            physically present.
          </li>
          <li>Registration phase ends on 30th October at 11:59PM IST hours.</li>
        </ul>
      </div>
    </div>
  );
};

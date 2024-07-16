import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const YourProfession = () => {
  const MoreInfoArray = [
    {
      profession: "CREATOR",
    },
    {
      profession: "ARTISTS",
    },
    {
      profession: "JOURNALIST",
    },
    {
      profession: "LIVESTREAMER",
    },
    {
      profession: "FAN",
    },
    {
      profession: "DANCER",
    },
    {
      profession: "EDUCATOR",
    },
    {
      profession: "TECHNICIAN",
    },
    {
      profession: "INVESTOR",
    },
    {
      profession: "TRAINER",
    },
  ];

  return (
    <div className="">
      <h3 className="font-monument font-normal leading-7">YOU ARE</h3>
      <div className="grid grid-cols-2 place-items-center">
        <div className="flex w-full flex-col items-start justify-center gap-7">
          {MoreInfoArray.map((item, index) => (
            <h1
              key={index}
              className="font-monument text-7xl font-normal leading-[56px] tracking-[0.02em] text-[#8958E1]"
            >
              {item.profession}
            </h1>
          ))}
        </div>
        <div className="flex w-full flex-col items-end justify-center">
          dada
        </div>
      </div>
    </div>
  );
};

export default YourProfession;

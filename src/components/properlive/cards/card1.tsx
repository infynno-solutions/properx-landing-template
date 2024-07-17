import Image from "next/image";
import React from "react";
import PrimaryText from "../common/PrimaryText";
import phoneInhand from "../../../../public/images/phone-inhand.svg";

const features = [
  "Games",
  "Chit Chat",
  "Streaming",
  "Video Call",
  "Fun",
  "Lets ",
  "Length",
];

const Card1 = () => {
  return (
    <div className="relative col-span-2 row-span-2 flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-primary-900 pl-2.5 pt-14 md:pl-7.5 lg:col-span-2 lg:row-span-2">
      <div className="flex max-w-[377px] flex-col gap-2">
        <PrimaryText className="text-white">don’t miss a second</PrimaryText>
        <p className="text-lg text-white">
          “Exclusive sports and Pay-Per-View events bring the stadium to your
          screen.
        </p>
      </div>

      <div className="relative w-max">
        <Image
          src={phoneInhand}
          alt="vector"
          className="relative !z-30 h-[250px] w-[360px] md:h-[415px] md:w-[500px]"
        />
        <div className="absolute right-20 top-10 z-10 h-[164px] w-[164px] rounded-full bg-[#00ECD2] md:right-[74px] md:top-16 md:h-[295px] md:w-[295px]"></div>
      </div>
      <div className="-gap-2 absolute -left-[30px] bottom-[25px] flex rotate-[23deg] items-center justify-center overflow-hidden whitespace-nowrap">
        {features.map((feature) => (
          <div
            className="w-max animate-marquee rounded-full bg-[#FD92EC] px-5 py-3 font-semibold"
            key={feature}
            style={{
              animationDuration: `2s`,
            }}
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card1;

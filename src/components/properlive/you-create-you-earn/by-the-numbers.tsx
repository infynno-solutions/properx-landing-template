import React from "react";
import PrimaryText from "../common/PrimaryText";

const count = 12648;
const ByTheNumbers = () => {
  const countArray = count.toString().split("");
  return (
    <div className="relative flex h-[677px] flex-col items-center justify-center gap-7 rounded-[42px] bg-[#8958E1] lg:col-span-2">
      {/* Counter  */}
      <div className="flex items-center justify-center gap-1.5">
        {countArray.map((number, i) => (
          <div
            className="ms:px-4 relative flex w-14 items-center justify-center rounded-md bg-white px-2 py-5 font-monument text-5xl md:w-auto"
            key={number + i}
          >
            <div className="absolute top-1/2 h-0.5 w-full bg-black/5" />
            {number}
          </div>
        ))}
      </div>

      {/* Text  */}
      <div className="mt-3 flex max-w-[449px] flex-col items-center justify-center gap-4 text-center text-white">
        <PrimaryText className="max-w-[391px] !text-4xl leading-[44px] text-white">
          properlive by the numbers
        </PrimaryText>
        <p className="text-sm opacity-70">
          See the platform’s pulse with live statistics. Be part of the growing
          Properlive community.
        </p>
      </div>

      {/* Buttons  */}
      <div className="flex w-[294px] flex-col gap-4">
        <button className="flex h-[53px] w-full items-center justify-center rounded-full bg-white">
          <p className="font-monument text-sm uppercase leading-4 text-black">
            Join properlive
          </p>
        </button>
        <button className="flex h-[53px] w-full items-center justify-center rounded-full bg-black">
          <p className="font-monument text-sm uppercase leading-4 text-white">
            Get the app
          </p>
        </button>
      </div>
    </div>
  );
};

export default ByTheNumbers;

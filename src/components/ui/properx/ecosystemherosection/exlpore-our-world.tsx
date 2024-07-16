import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const ExploreOurWorld = () => {
  return (
    <div className="relative mt-9 flex h-[599px] w-full items-center justify-center overflow-hidden rounded-[42px]">
      <Image
        alt="about us"
        className=""
        fill
        src={"/images/explore-world.png"}
      />
      <div className="z-30 flex flex-col items-center justify-center gap-[18px]">
        <h1 className="text-center font-monument text-7xl font-normal leading-[80px] tracking-[0.3em] text-white">
          EXPLORE OUR <br /> WORLD NOW
        </h1>
        <Button className="rounded-full bg-black px-9 py-7 font-monument text-base font-normal text-white">
          GET STARTED
        </Button>
      </div>
    </div>
  );
};

export default ExploreOurWorld;

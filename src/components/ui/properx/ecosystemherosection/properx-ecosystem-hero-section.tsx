import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const EcosystemHeroSection = () => {
  return (
    <div className="relative h-[760px] overflow-hidden rounded-[32px] border shadow-[0px_0px_80px_10px_#00000024]">
      <div className="ml-20 h-full w-full overflow-hidden">
        <div className="mt-11 flex items-center justify-start gap-[42px] text-xs font-semibold tracking-[0.12em] opacity-40">
          <h1>ELLINGSEN TECHNOLOGIES</h1> | <h1>INNOVATION</h1>
        </div>

        <div className=" relative -right-[369px] -top-[386px] h-[930.03px] w-[1240.04px] rotate-[9deg] transform bg-ecosystem-gradient">
          <Image
            alt="Ecosystem Hero Section"
            className="mix-blend-color-multiply"
            fill
            src={"/images/ecosysteImage.png"}
          />
        </div>
        <div className="absolute bottom-[200px] z-10 h-0.5 w-full max-w-[1245px] bg-black bg-opacity-10"></div>
        {/* <Image /> */}

        <div className="absolute top-[263.6px] w-fit">
          <h1 className="font-monument text-7xl font-normal leading-[78.88px] tracking-[0.10em]">
            PROPER <br /> ECOSYSTEM
          </h1>

          <div className="mt-48 flex w-fit items-center justify-start gap-9">
            <Button className="rounded-full bg-black px-[35px] py-[28px] font-monument text-base font-normal text-white">
              GET STARTED
            </Button>
            <p className="text-base font-medium leading-[25.44px] text-gray-500">
              The ProperX ecosystem isn’t just a collection of digital tools --
              it’s a constellation of interconnected web <br /> environments,
              each serving a specific yet harmoniously integrated role. Below is
              a detailed overview of each <br /> web environment and how they
              interrelate to present a seamless, unified user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemHeroSection;

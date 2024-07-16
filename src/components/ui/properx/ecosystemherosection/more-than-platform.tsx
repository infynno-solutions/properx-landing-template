import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const RocketLogo = () => {
  return (
    <>
      <div className="mb-[89px] flex h-[34.01px] w-[34.01px] items-center justify-center rounded-lg bg-white blur-[2px]">
        <Image
          alt="about us"
          className=" "
          height={15}
          width={15}
          src={"/images/x-wallet.png"}
        />
      </div>
      <div className="flex h-[243px] w-[51px] flex-col items-center justify-start rounded-3xl bg-logos-tail-gradient-third">
        <div className="flex h-[50.82px] w-[50.82px] items-center justify-center rounded-xl bg-white">
          <Image
            alt="about us"
            className="rounded-xl"
            width={60}
            height={60}
            src={"/images/two-guys-holding-hand.png"}
          />
        </div>
      </div>
      <div className="flex h-[321px] w-[67px] flex-col items-center justify-start rounded-3xl bg-logos-tail-gradient-third">
        <div className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={36}
            width={36}
            src={"/images/x-community-lock.png"}
          />
        </div>
      </div>
      <div className="flex h-[504.47px] w-[138px] flex-col items-center justify-start rounded-3xl bg-logos-tail-gradient-mid">
        <div className="flex h-[138px] w-[138px] items-center justify-center rounded-3xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={56}
            width={84}
            src={"/images/x-logo.png"}
          />
        </div>
      </div>
      <div className="flex h-[321px] w-[67px] flex-col items-center justify-start rounded-3xl bg-logos-tail-gradient-third">
        <div className="flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={36}
            width={36}
            src={"/images/x-lock.png"}
          />
        </div>
      </div>
      <div className="flex h-[243px] w-[51px] flex-col items-center justify-start rounded-3xl bg-logos-tail-gradient-third">
        <div className="flex h-[50.82px] w-[50.82px] items-center justify-center rounded-xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={20.2}
            width={28.49}
            src={"/images/x-hands.png"}
          />
        </div>
      </div>
      <div className="mb-[89px] flex h-[34.01px] w-[34.01px] items-center justify-center rounded-lg bg-white blur-[2px]">
        <Image
          alt="about us"
          className=" "
          height={15}
          width={15}
          src={"/images/x-two-guys-secure-lock.png"}
        />
      </div>
    </>
  );
};
const MoreThanPlatform = () => {
  return (
    <div className="mt-[77px] rounded-[42px] border-[6px] border-[rgba(255,255,255,1)] bg-more-than-platform-gradient">
      <div className="mt-[159px] flex w-full flex-col items-center justify-center text-[rgba(255,255,255,1)]">
        <h1 className="letter-spacing-[0.03em] text-center font-monument text-7xl font-normal leading-[80px]">
          PROPERX IS MORE <br /> THAN JUST A  <br /> PLATFORM
        </h1>
        <p className="mt-[18px] text-center text-base font-normal">
          it’s a paradigm shift. As Naval Ravikant suggests, the future belongs
          to individuals <br /> who break free from traditional institutions to
          forge their own path. ProperX <br /> facilitates exactly that, serving
          as the scaffolding upon which people can build their <br /> dreams.
          Our ecosystem is tailored to simplify this complex web for consumers
          too, <br /> giving them a single point of entry to a universe of
          creativity and utility.
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center">
        <div className="bg-gradient-radial absolute top-0 h-[274px] w-[274px] rounded-full bg-circle-blur-gradient bg-cover bg-center bg-no-repeat blur-3xl"></div>
        <div className="z-10 mt-[88px] flex w-full items-center justify-center gap-7">
          <RocketLogo />
        </div>
        <div className="absolute mt-[173px] flex w-full items-center justify-between px-[69px]">
          <Image
            alt="about us"
            className=""
            height={255}
            width={255}
            src={"/images/left-side-dots.png"}
          />
          <Image
            alt="about us"
            className=""
            height={255}
            width={255}
            src={"/images/right-side-dots.png"}
          />
        </div>
      </div>
    </div>
  );
};

export default MoreThanPlatform;

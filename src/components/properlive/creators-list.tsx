"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import starEyes from "../../../public/icons/emojis/star-eyes.svg";
import heartKiss from "../../../public//icons/emojis/love-heart.svg";
import popcorn from "../../../public//icons/emojis/popcorn.svg";
import heartEyes from "../../../public//icons/emojis/love-eyes.svg";

import blushing from "../../../public//icons/emojis/blushing.svg";
import laughing from "../../../public//icons/emojis/laughing.svg";

import crossMark from "../../../public//icons/emojis/cross-tick.svg";
import rightMark from "../../../public//icons/emojis/right-tick.svg";

import SvgIcon from "./common/svg-icon";
import { cx } from "class-variance-authority";
import PrimaryText from "./common/PrimaryText";
const creators = [
  {
    avatar: "/images/avatar/1.png",
    name: "Pat Casey",
    message: "🔥 stream bro, thank you for streaming",
  },
  {
    avatar: "/images/avatar/2.png",
    name: "Phillip Stanton",
    message: "The enemy is behind you!",
  },
  {
    avatar: "/images/avatar/3.png",
    name: "Marvin McKinney",
    message: "Watch out!",
  },
  {
    avatar: "/images/avatar/4.png",
    name: "Jane Cooper",
    message: "You are Pro!",
  },
  {
    avatar: "/images/avatar/5.png",
    name: "Arlene McCoy",
    message: "Nice punch!",
  },
];

const CreatorsList = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((prev) => (prev < 4 ? prev + 1 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center justify-center gap-[74px]">
      {/* Heading  */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <Image src="/icons/fire.svg" height={64} width={52} alt="creators" />
        <PrimaryText>Be part of the action</PrimaryText>
        <p className="text-lg">
          Interact with creators and other fans in real-time. Your voice
          matters.
        </p>
      </div>

      {/* Content  */}
      <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-0">
        <div className="relative px-[86px]">
          {/* Left side icons  */}
          <SvgIcon src={popcorn} className="absolute bottom-0 left-5 z-10" />
          <SvgIcon
            src={heartKiss}
            className="absolute bottom-1/2 left-5 z-10"
          />
          <SvgIcon src={heartEyes} className="absolute left-0 top-8 z-10" />
          <SvgIcon
            src={starEyes}
            className="absolute left-16 top-16 z-50 rounded-full"
          />
          {/* Right side icons  */}
          <SvgIcon
            src={blushing}
            className="absolute bottom-11 right-13 z-40"
          />
          <SvgIcon src={laughing} className="absolute bottom-28 right-6 z-10" />
          <SvgIcon src={rightMark} className="absolute right-1 top-14 z-20" />
          <SvgIcon src={crossMark} className="absolute right-10 top-8 z-10" />

          {/* Main screenshot image */}
          <Image
            src="/images/screenshot-1.png"
            className="relative z-30"
            alt="streaming"
            height={272}
            width={477}
          />
        </div>

        {/* Creators List  */}
        <div className="flex flex-col items-center justify-center gap-2">
          {creators.map((creator, i) => (
            <div
              className={cx(
                "flex h-16 w-[310px] cursor-pointer items-center justify-start gap-2.5 rounded-full bg-white px-3 py-3.5 transition-all duration-200 ease-in-out md:w-[468px]",
                selectedIndex === i
                  ? "border border-primary-900"
                  : "border-[1px] border-black/10",
              )}
            >
              <Image src={creator.avatar} height={35} width={35} alt="user" />
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-semibold">{creator.name}</p>
                <p className="text-xs">{creator.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorsList;

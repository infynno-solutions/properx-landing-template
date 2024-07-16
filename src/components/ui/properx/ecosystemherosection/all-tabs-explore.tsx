import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const AllTabsExplore = () => {
  const allTabsArray = [
    {
      title: "ABOUT",
      imageSrc: "/images/x-logo.png",
    },
    {
      title: "PLATFORMS",
      number: "9",
      imageSrc: "/images/x-logo.png",
    },
    {
      title: "CHANGELOG",

      imageSrc: "/images/x-community-lock.png",
    },
    {
      title: "ACADEMY",

      imageSrc: "/images/full-lock.png",
    },

    {
      title: "SUPPORT",

      imageSrc: "/images/x-meet.png",
    },

    {
      title: "POLICIES",

      imageSrc: "/images/x-lock.png",
    },
    {
      title: "USERS",
      number: "12k",
      imageSrc: "/images/x-lock.png",
    },
    {
      title: "POLICIES",

      imageSrc: "/images/x-hands.png",
    },
    {
      title: "POLICIES",
      buttontitle: "Explore",
      imageSrc: "/images/x-lock.png",
    },
    {
      title: "POLICIES",

      imageSrc: "/images/x-wallet.png",
    },
    {
      title: "POLICIES",

      imageSrc: "/images/x-message.png",
    },
    {
      title: "POLICIES",

      imageSrc: "/images/x-two-guys-secure-lock.png",
    },
  ];
  return (
    <div className="mt-20 grid grid-cols-4 place-items-center gap-[37.5px]">
      {allTabsArray.map((item, index) => (
        <div
          key={index}
          className={` ${(index === 0 || index === 3 || index === 9) && "animate-border bg-gradient-to-r from-[#796CDC] to-[#3DE6D3] via-[#F98EDA] bg-[length:400%_400%]"} flex h-[328.39px] w-[328.39px] items-center justify-center rounded-[32px] p-1.5 shadow-[0px_4px_32px_0px_#0000001a]`}
        >
          <div className="flex h-full w-full items-center justify-center rounded-[26px] bg-white">
            {index === 1 || index === 6 ? (
              <div className="flex h-[123px] w-[82px] flex-col items-center justify-center rounded-3xl bg-white text-center">
                <h1 className="font-monument text-7xl font-normal leading-[86.4px]">
                  {item?.number ?? ""}
                </h1>
                <p className="text-base font-semibold tracking-[4px]">
                  {item?.title ?? ""}
                </p>
              </div>
            ) : index === 8 && item.buttontitle ? (
              <Button className="rounded-full bg-black px-9 py-7 font-monument text-base font-normal text-white">
                {item.buttontitle}
              </Button>
            ) : (
              <div className="flex h-[123px] w-[82px] items-center justify-center rounded-3xl bg-white">
                <Image
                  alt={item.title}
                  className=" "
                  height={56}
                  width={84}
                  src={item?.imageSrc ? item?.imageSrc : ""}
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllTabsExplore;

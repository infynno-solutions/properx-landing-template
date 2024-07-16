import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const MoreOnUs = () => {
  const MoreInfoArray = [
    {
      title: "ABOUT",
      description:
        "The flagship landing page designed to be the first touch-point for users new to ProperX.",
      imageSrc: "/images/rocket-3D.png",
    },
    {
      title: "ACCOUNTS",
      description:
        "The flagship landing page designed to be the first touch-point for users new to ProperX.",
      imageSrc: "/images/account-3D.png",
    },
    {
      title: "CHANGELOG",
      description:
        "The flagship landing page designed to be the first touch-point for users new to ProperX.",
      imageSrc: "/images/book-3D.png",
    },
    {
      title: "ACADEMY",
      description:
        "The flagship landing page designed to be the first touch-point for users new to ProperX.",
      imageSrc: "/images/star-3D.png",
    },
    ,
    {
      title: "SUPPORT",
      description:
        "The flagship landing page designed to be the first touch-point for users new to ProperX.",
      imageSrc: "/images/support-3D.png",
    },
    ,
    {
      title: "POLICIES",
      description:
        "The flagship landing page designed to be the first touch-point for users new to ProperX.",
      imageSrc: "/images/file-3D.png",
    },
  ];

  return (
    <div className="mt-20">
      <h1 className="font-monument text-2xl font-normal text-black">
        MORE ON US
      </h1>
      <div className="mt-8 grid grid-cols-2 gap-6 gap-y-6">
        {/* remove border fom below line */}

        {MoreInfoArray.map((item, index) => (
          <div
            key={index}
            className="bg-rgba(255_255_255_1) flex w-full sitems-start justify-between rounded-[32px] px-9 py-14 shadow-[0px_0px_80px_10px_#00000024]"
          >
            <div className="flex flex-col items-start justify-center gap-3.5">
              <h1 className="letter-spacing-[-0.01em] font-monument text-4xl font-normal leading-[43.2px]">
                {item?.title ?? ""}
              </h1>
              <p className="letter-spacing-[-0.10em] text-[15px] font-medium leading-[20px] text-slate-500">
                The flagship landing page designed to be the <br /> first
                touch-point for users new to ProperX.
              </p>
            </div>

            <Image
              alt="about us"
              className=""
              height={135}
              width={135}
              src={item?.imageSrc ?? ""}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreOnUs;

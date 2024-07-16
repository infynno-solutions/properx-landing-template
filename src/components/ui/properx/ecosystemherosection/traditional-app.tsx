import Image from "next/image";
import React from "react";
import { Button } from "../../button";
import HeaderParagraph from "../../common/header-pagraph";

import { AiTwotoneStop } from "react-icons/ai";

import StopSvg from "../../svg/StopSVg";
const TraditionalApp = () => {
  const ProperXCarousel = () => {
    return (
      <>
        <div className="z-50 flex h-[34.01px] w-[34.01px] items-center justify-center rounded-lg bg-white blur-[2px]">
          <Image
            alt="about us"
            className=" "
            height={15}
            width={15}
            src={"/images/x-wallet.png"}
          />
        </div>

        <div className="z-50 flex h-[50.82px] w-[50.82px] items-center justify-center rounded-xl bg-white blur-[1px]">
          <Image
            alt="about us"
            className="rounded-xl"
            width={60}
            height={60}
            src={"/images/two-guys-holding-hand.png"}
          />
        </div>

        <div className="z-50 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={36}
            width={36}
            src={"/images/x-community-lock.png"}
          />
        </div>

        <div className="z-50 flex h-[138px] w-[138px] items-center justify-center rounded-3xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={56}
            width={84}
            src={"/images/x-logo.png"}
          />
        </div>

        <div className="z-50 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-white">
          <Image
            alt="about us"
            className=" "
            height={36}
            width={36}
            src={"/images/x-lock.png"}
          />
        </div>

        <div className="z-50 flex h-[50.82px] w-[50.82px] items-center justify-center rounded-xl bg-white blur-[1px]">
          <Image
            alt="about us"
            className=" "
            height={20.2}
            width={28.49}
            src={"/images/x-hands.png"}
          />
        </div>

        <div className="z-50 flex h-[34.01px] w-[34.01px] items-center justify-center rounded-lg bg-white blur-[2px]">
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

  return (
    <div className="mt-20 grid h-[765.99px] grid-cols-2 rounded-[42px] border-4 border-white shadow-[0px_0px_80px_10px_#00000024]">
      <div className="relative overflow-hidden rounded-bl-[42px] rounded-tl-[42px] bg-[#F6F3FC]">
        <div className="mr-[50px] mt-20 h-[327.99px] w-full max-w-[679px]">
          <Image
            alt="traditional app"
            className=""
            height={327}
            width={679}
            src={"/images/traditional-dots.png"}
          />
        </div>
        <div className="ml-[70px] mt-32 flex w-full max-w-[600px] flex-col items-start justify-start gap-9">
          <h1 className="font-monument text-4xl font-normal leading-[42.76px]">
            TRADITIONAL <br /> APP
          </h1>
          <div className="flex items-center justify-start gap-[50px]">
            <div className="flex items-start justify-start gap-4">
              <StopSvg />
              <h6 className="flex break-words text-base font-normal leading-[20px]">
                Siloed and <br /> limited
              </h6>
            </div>
            <div className="flex items-start justify-start gap-4">
              <StopSvg />
              <h6 className="flex break-words text-base font-normal leading-[20px]">
                Don't serve the <br />
                best interests
              </h6>
            </div>
            <div className="flex items-start justify-start gap-4">
              <StopSvg />
              <h6 className="flex break-words text-base font-normal leading-[20px]">
                High <br />
                subscription fee
              </h6>
            </div>

            {/* {traditionalAppArray.map((item, index) => (
              <div
                key={index}
                className="flex items-start justify-start gap-1.5"
              >
            
                <StopSvg />
                <h6
                  className="flex break-words text-base font-normal leading-[20px] w-[152px]"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                ></h6>
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <div className="bg-traditional-app-ecosystem-gradient relative rounded-br-[42px] rounded-tr-[42px]">
        <div className="bg-gradient-radial bg-properX-ecosystem-gradient absolute left-[174px] top-[70px] z-0 h-[343.64px] w-[343.64px] rounded-full bg-cover bg-center bg-no-repeat blur-xl"></div>
        <div className="z-40 mt-44 flex w-full items-center justify-center gap-7">
          <ProperXCarousel />
        </div>
        <div className="absolute bottom-[66px] ml-[86px] flex flex-col items-start justify-start gap-3">
          <h1 className="font-monument text-4xl font-normal text-white">
            PROPER X <br /> ECOSYSTEM
          </h1>
          <p className="mt-7 text-base font-medium text-white">
            Provides users with a central hub where they can
            <br /> easily navigate to all other platforms within the <br />
            ecosystem
          </p>
        </div>

        {/* <Image
          alt="about us"
          className=""
          fill
          src={"/images/explore-world.png"}
        /> */}
      </div>
    </div>
  );
};

export default TraditionalApp;

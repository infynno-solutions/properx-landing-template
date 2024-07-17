import Image from "next/image";
import React from "react";
import SvgIcon from "../common/svg-icon";
import coin1 from "../../../../public/icons/coins/coin1.svg";
import coin2 from "../../../../public/icons/coins/coin2.svg";
import coin3 from "../../../../public/icons/coins/coin3.svg";
import coin4 from "../../../../public/icons/coins/coin4.svg";
import coinBag from "../../../../public/icons/coins/coin-bag.svg";
import { FaCaretUp } from "react-icons/fa";
import PrimaryText from "../common/PrimaryText";

const YouCreateYouEarn = () => {
  return (
    <div className="flex h-[677px] flex-col items-center justify-center gap-24 overflow-hidden rounded-[42px] bg-[#00EDD3] p-4 pt-35 md:p-10 lg:p-[108px]">
      {/* Main screenshot image */}
      <div className="relative scale-75 md:scale-90 lg:scale-100">
        <Image
          src="/images/screenshot-2.png"
          className="relative z-20"
          alt="live-stream"
          height={182}
          width={372}
        />
        <div className="absolute -top-16 left-8 z-10 flex h-72 w-72 rounded-full bg-[#FD8DDD] md:scale-75 lg:scale-100" />
        <SvgIcon src={coin1} className="absolute -left-24 -top-16" />
        <SvgIcon src={coin2} className="absolute -top-8 left-3 z-30" />
        <SvgIcon src={coin3} className="absolute -top-12 right-10 z-30" />
        <SvgIcon src={coin4} className="absolute -right-9 -top-10 z-30" />
        <SvgIcon src={coinBag} className="absolute -bottom-4 left-3 z-30" />

        <div className="absolute bottom-0 right-0 z-40 flex h-10 w-max items-center justify-center gap-2.5 rounded-md bg-[#9058E3] px-3">
          <p className="font-medium text-white">$14.269</p>
          <FaCaretUp className="text-[#2AFFA5]" />
        </div>
      </div>

      {/* Text  */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <PrimaryText>You Create, You earn.</PrimaryText>
        <p>
          Enjoy lower fees, gain loyal subscribers, and benefit from direct
          tipping. You’re in control.
        </p>
      </div>
    </div>
  );
};

export default YouCreateYouEarn;

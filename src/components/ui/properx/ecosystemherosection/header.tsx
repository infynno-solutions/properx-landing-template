import Image from "next/image";
import React from "react";
import { Button } from "../../button";

const Header = () => {
  return (
    <div className="mb-6 flex w-full items-center justify-between">
      <div className="flex items-center gap-7">
        <Image
          alt={"proper-x-logo"}
          className=" "
          height={46}
          width={46}
          src={"/images/x-logo.png"}
        />
        <p className="font-monument text-sm text-black md:text-xl md:leading-[23.95px]">
          proper X
        </p>
        <Image
          alt={"menu-icon"}
          className=" "
          height={46}
          width={46}
          src={"/images/menu-icon.png"}
        />
      </div>
      <div className="flex items-center justify-center gap-[53px]">
        <div className="flex items-center justify-start gap-[53px]">
          <h6 className="text-sm font-semibold text-gray-500">ABOUT US</h6>
          <h6 className="text-sm font-semibold text-gray-500">CREATORS</h6>
        </div>
        <div>
          <Button className="hidden rounded-full bg-black px-6 py-[18PX] pb-[36px] font-monument text-sm md:block">
            GET STARTED
          </Button>
          <Button className="rounded-full bg-black px-4 py-2.5 font-monument text-[10px] leading-[16.8px] md:hidden">
            JOIN NOW
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;

import Image from "next/image";
import React from "react";
import SvgIcon from "../common/svg-icon";
import mic from "../../../../public/images/mic.svg";
import PrimaryText from "../common/PrimaryText";

const UncompromisingFreedom = () => {
  return (
    <div className="relative flex h-[677px] flex-col items-center justify-center gap-20 rounded-[42px] bg-primary-linear p-4 pt-12 md:p-10 lg:p-28">
      {/* Radial gradients  */}
      <div className="absolute -top-[225px] h-[595px] w-[595px] rounded-full bg-primary-radial opacity-10" />
      <div className="absolute -top-[60px] h-[267px] w-[267px] rounded-full bg-primary-radial opacity-10" />

      {/* Image and vectors  */}
      <div className="relative">
        <SvgIcon src={mic} className="" />
      </div>

      {/* Text  */}
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <PrimaryText className="!text-2xl md:!text-5xl">
          uncompromising freedom
        </PrimaryText>
        <p>
          We stand by the right to express and engage freely. Here, you make the
          rules
        </p>
      </div>
    </div>
  );
};

export default UncompromisingFreedom;

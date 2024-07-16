import Image from "next/image";
import React from "react";
import HeaderParagraph from "../../common/header-pagraph";
const PoperpeliveDotCom = () => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 gap-6 gap-y-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col items-start justify-start gap-36">
            <Image
              alt="properlive-icon"
              className="mt-[74px]"
              height={112}
              width={112}
              src={"/images/properlive-icon.png"}
            />
            <div
              className={`flex w-full max-w-[370px] flex-col items-start justify-start gap-3`}
            >
              <div className="flex items-start justify-start gap-2 border">
                <h1 className="font-monument text-4xl font-normal text-black">
                  PROPERLIVE
                </h1>
                <div className="h-2 w-2 rounded-full bg-[#D72F2F]"></div>
              </div>
              <p className="text-base font-medium">
                Authenticated users are led to live.properx.com, consistent with
                the overarching user interface and experience across the ProperX
                ecosystem.
              </p>
            </div>
          </div>
          <div className="flex w-[451.56px] flex-col items-center justify-center">
            <Image
              alt="green ring"
              className=""
              height={395}
              width={451}
              src={"/images/green-ring.png"}
            />
            <Image
              alt="porperlive-mobile"
              className="relative -top-[91px] shadow-[16px_22px_20px_px_#00000040]"
              height={255}
              width={296}
              src={"/images/properlive-mobile.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoperpeliveDotCom;

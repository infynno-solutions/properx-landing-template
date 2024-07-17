import React from "react";
import { BsArrowRight, BsGlobe2 } from "react-icons/bs";
import PrimaryText from "./common/PrimaryText";
import creator1 from "../../../public/images/discover-more-section/creator1.png";
import creator2 from "../../../public/images/discover-more-section/creator2.png";
import creator3 from "../../../public/images/discover-more-section/creator3.png";
import fortnite from "../../../public/images/discover-more-section/fortnite.png";
import gta1 from "../../../public/images/discover-more-section/gta_v.png";
import gta2 from "../../../public/images/discover-more-section/gta_v2.png";
import minecraft from "../../../public/images/discover-more-section/minecraft.png";
import minecraft2 from "../../../public/images/discover-more-section/minecraft2.png";
import Image from "next/image";

const DiscoverMore = () => {
  return (
    <div className="-px-8 relative flex h-[797px] w-full flex-col items-center justify-center self-center overflow-hidden">
      <div className="flex max-w-[580px] flex-col items-center justify-center gap-5 text-center">
        <BsGlobe2 className="h-16 w-16" />
        <PrimaryText>a universe of content awaits</PrimaryText>
        <p className="text-lg">
          Discover streams across an array of interests–– from games to
          lifestyle to everything in between
        </p>
        <button className="flex h-[53px] w-[248px] items-center justify-center gap-2.5 rounded-full bg-black">
          <p className="font-monument text-sm uppercase leading-4 text-white">
            Discover more
          </p>
          <BsArrowRight className="h-5 w-5 text-white" />
        </button>
      </div>

      {/* Animation images  */}
      <Image
        src={creator1}
        className="absolute -left-[15%] bottom-[18%] scale-50 md:left-[15%] md:scale-100"
        alt="creator1"
      />
      <Image
        src={creator2}
        className="absolute left-[28%] top-28 scale-75 md:scale-100"
        alt="creator2"
      />
      <Image
        src={creator3}
        className="scale-60 absolute left-0 top-[12%] md:left-[12%] md:scale-100"
        alt="creator3"
      />
      <Image
        src={fortnite}
        className="scale-60 absolute left-[35%] top-0 md:left-[43%] md:top-12 md:scale-100"
        alt="fortnite"
      />
      <Image
        src={gta2}
        className="scale-60 absolute !-right-[15%] top-[10%] md:!right-[15%] md:scale-100"
        alt="gta-2"
      />
      <Image
        src={gta1}
        className="scale-60 absolute bottom-0 right-[18%] md:right-[38%] md:scale-100"
        alt="gta-1"
      />
      <Image
        src={minecraft}
        className="scale-60 absolute -right-[15%] bottom-[5%] md:right-[18%] md:scale-100"
        alt="minecraft"
      />
      <Image
        src={minecraft2}
        className="scale-60 absolute bottom-[4%] left-0 md:left-[30%] md:scale-100"
        alt="minecraft-2"
      />
    </div>
  );
};

export default DiscoverMore;

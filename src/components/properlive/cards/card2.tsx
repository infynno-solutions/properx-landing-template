import Image from "next/image";
import React from "react";
import cardBg from "../../../../public/images/card-1.png";

const Card2 = () => {
  return (
    <div className="rounded-3xl bg-transparent">
      <Image
        src={cardBg}
        alt="card"
        className="!h-full !w-full rounded-2xl object-cover lg:!max-h-[324px]"
      />
    </div>
  );
};

export default Card2;

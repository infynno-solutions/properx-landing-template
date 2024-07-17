import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <Image
        src="/icons/properlive.svg"
        alt="Properlive"
        width={226}
        height={46}
      />

      <button className="flex h-[53px] w-auto items-center justify-center rounded-full bg-black px-2 md:w-[145px] md:px-0">
        <p className="font-monument text-xs uppercase leading-4 text-white md:text-sm">
          {" "}
          Join now
        </p>
      </button>
    </div>
  );
};

export default Header;

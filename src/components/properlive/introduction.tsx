import Image from "next/image";
import React from "react";
import PrimaryText from "./common/PrimaryText";

const Introduction = () => {
  return (
    <div className="-mt-12 flex h-auto w-full flex-col-reverse items-center justify-center gap-10 rounded-[32px] bg-white px-4 py-8 shadow-main md:px-0 lg:h-[760px] lg:flex-row lg:py-0">
      {/* Text  */}
      <div className="flex max-w-[574px] flex-col items-center justify-start gap-5 text-center">
        <PrimaryText>PEOPLE COME TO STREAM, WATCH AND ENGAGE.</PrimaryText>
        <p>
          Why settle for a scribbled autograph when you can have a meaningful
          conversation? Propermeet makes idols accessible, turning brief
          encounters into lasting memories.
        </p>
        <div className="flex flex-col items-center justify-center gap-5">
          <button className="flex h-[64px] w-[355px] items-center justify-center rounded-full bg-gradients-primary">
            <p className="font-monument text-sm uppercase leading-4 text-white">
              Create your memory now
            </p>
          </button>
          <button className="flex h-[64px] w-[190px] items-center justify-center rounded-full bg-black">
            <p className="font-monument text-sm uppercase leading-4 text-white">
              Get the app
            </p>
          </button>
        </div>
      </div>
      {/* Image */}
      <div>
        <Image
          src="/images/intro.png"
          alt="introduction"
          className="h-[300px] w-[500px] lg:h-[520px] lg:w-[700px]"
          width={700}
          height={520}
        />
      </div>
    </div>
  );
};

export default Introduction;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLink = [
  "ProperX.com",
  "About.ProperX.com",
  "Properfans.com",
  "Analytics.ProperX.com",
  "Propermeet.com",
  "Changelog.Propermeet.com",
  "Properchat.com",
  "Status.Properchat.com",
  "Properlive.com",
  "Support.Properlive.com",
  "Creators.ProperX.com",
  "Academy.ProperX.com",
  "Account.ProperX.com",
  "Policies.ProperX.com",
];

const resourcesLink = [
  "Support Center",
  "FAQ",
  "Privacy Policy",
  "Terms of Services",
  "Community Guideline",
];
const Footer = () => {
  return (
    <div className="mt-24 flex w-full flex-col gap-10 pb-10 md:flex-row md:justify-between xl:px-[60px]">
      <div className="flex h-full max-w-[228px] flex-col gap-5 md:min-h-[288px] md:justify-between">
        <div className="flex flex-col gap-5">
          <div className="w-17 md:h-[49px] md:w-[98px]">
            <Image src={"/icons/logo.svg"} alt="logo" width={98} height={49} />
          </div>
          <h1 className="text-base text-[#666666]">
            PROPERX IS AN ELLINGSES TECHNOLOGIES INNOVATION
          </h1>
        </div>

        <div className="flex items-end gap-7">
          <Link href={"/"}>
            <Image
              src={"/icons/facebook.svg"}
              alt="facebook"
              width={26}
              height={26}
            />
          </Link>
          <Link href={"/"}>
            <Image
              src={"/icons/instagram.svg"}
              alt="instagram"
              width={26}
              height={26}
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full max-w-[746px] flex-col justify-between gap-10 md:flex-row">
        <div className="flex max-w-[447px] flex-col gap-5">
          <h1 className="font-monument text-base font-normal">ECOSYSTEM</h1>
          <div className="grid grid-cols-2 gap-4">
            {footerLink?.map((data) => (
              <div key={data}>
                <Link href={"/"}>
                  <h1 className="text-sm text-black hover:text-blue-700 xl:text-base">
                    {data}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-monument text-base font-normal">RESOURCES</h1>
          <div className="grid gap-3">
            {resourcesLink?.map((data) => (
              <div key={data}>
                <Link href={"/"}>
                  <h1 className="text-sm text-black hover:text-blue-700 xl:text-base">
                    {data}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

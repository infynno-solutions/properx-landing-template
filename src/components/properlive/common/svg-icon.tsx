import Image from "next/image";
import React from "react";

const SvgIcon = ({ src, className }: { src: string; className?: string }) => {
  return <Image src={src} className={className} priority alt="emoji" />;
};

export default SvgIcon;

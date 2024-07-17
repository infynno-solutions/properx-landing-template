import { cx } from "class-variance-authority";
import React from "react";

type PrimaryTextProps = {
  children: string | React.ReactNode;
  className?: string;
};

const PrimaryText: React.FC<PrimaryTextProps> = ({
  children,
  className = "",
}) => {
  return (
    <p
      className={cx(
        className,
        "font-monument text-3xl uppercase text-black md:text-5xl md:leading-[58px]",
      )}
    >
      {children}
    </p>
  );
};

export default PrimaryText;

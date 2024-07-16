import React from "react";

interface HeaderParagraphInterface {
  heading?: string;
  paragraph?: string;
  style?: string;
}
const HeaderParagraph = (props: HeaderParagraphInterface) => {
  const { heading, paragraph, style } = props;
  return (
    <div className={`${style} flex flex-col items-start justify-start gap-3`}>
      <h1 className="font-monument text-4xl font-normal text-black">
        {heading}
      </h1>
      <p className="text-xs font-medium">{paragraph}</p>
    </div>
  );
};

export default HeaderParagraph;

import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";

const Cards = () => {
  return (
    <div className="grid h-[669px] grid-cols-2 grid-rows-3 gap-5 lg:grid-cols-3 lg:grid-rows-2">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};

export default Cards;

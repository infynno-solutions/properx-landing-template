import Image from "next/image";
import React from "react";
import Header from "./header";
import Introduction from "./introduction";
import DiscoverMore from "./discover-more";
import Videos from "./cards/cards";
import Cards from "./cards/cards";
import CreatorsList from "./creators-list";
import Footer from "./footer";
import YouCreateMain from "./you-create-you-earn/home";

const Home = () => {
  return (
    <div className="mx-auto flex w-full max-w-[1410px] flex-col gap-20">
      <Header />
      <Introduction />
      <DiscoverMore />
      <Cards />
      <CreatorsList />
      <YouCreateMain />
      <Footer />
    </div>
  );
};

export default Home;

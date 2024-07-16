import AllTabsExplore from "@/components/ui/properx/ecosystemherosection/all-tabs-explore";
import ExploreOurWorld from "@/components/ui/properx/ecosystemherosection/exlpore-our-world";
import Header from "@/components/ui/properx/ecosystemherosection/header";
import MoreOnUs from "@/components/ui/properx/ecosystemherosection/more-on-us";
import MoreThanPlatform from "@/components/ui/properx/ecosystemherosection/more-than-platform";
import PoperpeliveDotCom from "@/components/ui/properx/ecosystemherosection/properlive-dot-com";
import EcosystemHeroSection from "@/components/ui/properx/ecosystemherosection/properx-ecosystem-hero-section";
import TraditionalApp from "@/components/ui/properx/ecosystemherosection/traditional-app";
import YourProfession from "@/components/ui/properx/ecosystemherosection/your-professions";
import React from "react";

const page = () => {
  return (
    <>
      <div className="overflow-hidden p-[51px]">
        <Header />
        <EcosystemHeroSection />
        <AllTabsExplore />
        <TraditionalApp />
        <PoperpeliveDotCom />
        <MoreOnUs />
        <MoreThanPlatform />
        <ExploreOurWorld />
        <YourProfession />
      </div>
    </>
  );
};

export default page;

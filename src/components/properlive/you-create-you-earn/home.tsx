import React from "react";
import YouCreateYouEarn from "./you-create-you-earn";
import UncompromisingFreedom from "./uncompromising-freedom";
import ByTheNumbers from "./by-the-numbers";

const YouCreateMain = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 gap-9 lg:grid-cols-2">
      <YouCreateYouEarn />
      <UncompromisingFreedom />
      <ByTheNumbers />
    </div>
  );
};

export default YouCreateMain;

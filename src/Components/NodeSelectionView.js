import React from "react";
import EorzeaClock from "./EorzeaClock";
import MobileHeader from "./Headers/MobileHeader";

function NodeSelectionView({ profession }) {
  return (
    <div className="tc">
      <MobileHeader />
      <EorzeaClock labelType="p" />
      <h1>{profession}</h1>
      <p>This is the Botany page.</p>
    </div>
  );
}

export default NodeSelectionView;
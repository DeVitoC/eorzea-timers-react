import React from "react";
import EorzeaClock from "../Components/EorzeaClock";
import ProfessionButton from "../Components/ProfessionButton";
import { Link } from 'react-router-dom';

export default function MobileUI() {
  return (
    <div className="tc">
      <h1>EORZEA TIME</h1>
      <EorzeaClock labelType="h1" />
      <h2 className="mt5 white">Choose a Profession:</h2>
      <div>
        <Link to="/eorzea-timers-react/botany">
          <ProfessionButton title="Botany" />
        </Link>
        <Link to="/eorzea-timers-react/mining">
          <ProfessionButton title="Mining" />
        </Link>
        <Link to="/eorzea-timers-react/fishing">
          <ProfessionButton title="Fishing" />
        </Link>
      </div>
    </div>
  );
}
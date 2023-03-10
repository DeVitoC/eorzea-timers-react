import React from "react";
import { Link } from "react-router-dom";
import EorzeaClock from "../EorzeaClock";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function MobileHeader() {
  return (
    <div className="flex">
      <Link to="/eorzea-timers-react">
        <FontAwesomeIcon className="white dib ml2 mt2 fa-lg" icon="arrow-left" />
      </Link>
    </div>
  );
}
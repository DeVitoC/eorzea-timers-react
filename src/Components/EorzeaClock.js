import React, { useState } from "react";
import UpdateTime from "../Controllers/UpdateTime";

function EorzeaClock() {
  const {shouldRerender, setShouldRerender} = useState(false);
  const currentEorzeaTime = UpdateTime()

  setState(shouldRerender=true)
  return (
    <div>
      <h1>{currentEorzeaTime}</h1>
    </div>
  )
}

export default EorzeaClock;
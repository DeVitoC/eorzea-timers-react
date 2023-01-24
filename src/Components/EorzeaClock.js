import React, { useEffect, useState } from "react";
import UpdateTime from "../Controllers/UpdateTime";

function EorzeaClock({ labelType }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
      const intervalId = setInterval(() => {
          setTime(new Date());
      }, 100);
      return () => clearInterval(intervalId);
  }, []);

  const currentEorzeaTime = UpdateTime();

  if (labelType === "h1") {
    return <h1 className="white">{currentEorzeaTime}</h1>;
  } else if (labelType === "p") {
    return <p className="white mt0">{currentEorzeaTime}</p>;
  }
}

export default EorzeaClock;
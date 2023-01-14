import React, { useEffect, useState } from "react";
import UpdateTime from "../Controllers/UpdateTime";

function EorzeaClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
      const intervalId = setInterval(() => {
          setTime(new Date());
      }, 100);
      return () => clearInterval(intervalId);
  }, []);

  const currentEorzeaTime = UpdateTime();

  return (
    <div>
      <h1>{currentEorzeaTime}</h1>
    </div>
  );
}

export default EorzeaClock;
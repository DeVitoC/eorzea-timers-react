import React from "react";

export default function GatheringNode({ 
  name, 
  time, 
  location, 
  img, 
  description, 
  type, 
  source, 
  level, 
  stars, 
  x, 
  y, 
  expac 
}) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <p>{name}</p>
        <p>{location}</p>
        <p>{level} {stars}</p>
      </div>
      <div>
        <p>Available in: 1:00</p>
      </div>
    </div>
  );
}
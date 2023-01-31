import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { text } from "@fortawesome/fontawesome-svg-core";
import AvailableInText from "../Controllers/AvailableInText";

const firebaseConfig = {
  apiKey: "AIzaSyAPYSgNJDOe2BPNTjlEcYiz6kzI82sG1WE",
  authDomain: "timersimages.firebaseapp.com",
  projectId: "timersimages",
  storageBucket: "timersimages.appspot.com",
  messagingSenderId: "715020355745",
  appId: "1:715020355745:web:d8af2080ce5d5b404d88e0"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

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
  const [image, setImage] = useState(img);
  const [timeUntil, setTimeUntil] = useState(new Date());
  const goldOreRef = ref(storage, "GoldOre.jpg");
  let backgroundColor = "bg-near-black";

  useEffect(() => {
      const intervalId = setInterval(() => {
          setTimeUntil(new Date());
      }, 100);
      return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    getImage(img, setImage)
  }, []);

  const getImage = (imageName, setImageState) => {
    getDownloadURL(goldOreRef).then((url) => {
      setImageState(url);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const timeUntilAvailable = () => {
    if (!time) return;
    let duration = 3;
    // let availableInText = AvailableInText(time ?? 0, duration);
    let availableInText = "Available Now";

    if (availableInText === "Available Now") {
      backgroundColor = "bg-light-green";
    } else {
      backgroundColor = "bg-yellow";
    }

    return availableInText;
  }

  return (
    <div className="dib flex items-center w-100">
      <div className="dib">
        <img className="dib" src={ image } alt="Node" width="40px" height="40px" />
      </div>
      <div className="dib ml2 tl">
        <h5 className="white pa0 ma0">{name}</h5>
        <h6 className="white pa0 ma0">{location}</h6>
        <h6 className="white pa0 ma0">{level} {"★".repeat(stars)}</h6>
      </div> 
      <h5 className="white dib ml3">Available in: 1:00</h5>
    </div>
  );
}
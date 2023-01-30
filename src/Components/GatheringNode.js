import React, { useState, useEffect } from "react";
import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

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
const goldOreRef = ref(storage, "GoldOre.jpg");
const goldOreURL = getDownloadURL(goldOreRef).then((url) => {
  return url;
});

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

  useEffect(() => {
    getImage(img, setImage)
  }, []);

  const getImage = (imageName, setImageState) => {
    // storage.child(`${imageName}.jpg`).getDownloadURL().then((url) => {
    //   setImageState(url)
    // });
    
  };

  return (
    <div>
      <img src={ image } alt="Node" width="100px" height="100px" />
      <div>
        <p className="white">{name}</p>
        <p className="white">{location}</p>
        <p className="white">{level} {stars}</p>
      </div>
      <div>
        <p className="white">Available in: 1:00</p>
      </div>
    </div>
  );
}
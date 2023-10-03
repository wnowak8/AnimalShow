import { useState } from "react";

import bird from "./svg/bird.svg";

import cat from "./svg/cat.svg";

import cow from "./svg/cow.svg";

import dog from "./svg/dog.svg";

import gator from "./svg/gator.svg";

import heart from "./svg/heart.svg";

import horse from "./svg/horse.svg";

const svgMap = { bird, cat, cow, dog, gator, horse };

const AnimalShow = ({ type }) => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const altText = `Illustration of a ${type}`;

  return (
    <div onClick={handleClick} className="animal-show">
      <img src={svgMap[type]} alt={altText} className="animal" />

      <img
        src={heart}
        alt="Heart"
        style={{ width: 10 + 10 * clicks + "px" }}
        className="heart"
      />
    </div>
  );
};

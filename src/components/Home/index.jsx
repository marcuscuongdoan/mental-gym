import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";
import background from "../../assets/menu/background.png";
import art from "../../assets/menu/art.png";
import locker from "../../assets/menu/locker.png";
import lounge from "../../assets/menu/lounge.png";
import movement from "../../assets/menu/movement.png";
import smoothie from "../../assets/menu/smoothie.png";
import sound from "../../assets/menu/sound.png";
import spa from "../../assets/menu/spa.png";
import theatre from "../../assets/menu/theatre.png";
import write from "../../assets/menu/write.png";
import yoga from "../../assets/menu/yoga.png";

import goethe from "../../assets/logos/goethe.png";
import yogapod from "../../assets/logos/yogapod.png";

const ROOMS = {
  art: {
    name: "art",
    img: art,
  },
  locker: {
    name: "locker",
    img: locker,
  },
  lounge: {
    name: "lounge",
    img: lounge,
  },
  movement: {
    name: "movement",
    img: movement,
  },
  smoothie: {
    name: "smoothie",
    img: smoothie,
  },
  sound: {
    name: "sound",
    img: sound,
  },
  spa: {
    name: "spa",
    img: spa,
  },
  theatre: {
    name: "theatre",
    img: theatre,
  },
  write: {
    name: "write",
    img: write,
  },
  yoga: {
    name: "yoga",
    img: yoga,
  },
};

const ROOM_LIST = [
  "art",
  "locker",
  "lounge",
  "movement",
  "smoothie",
  "sound",
  "spa",
  "theatre",
  "write",
  "yoga",
];

function Home() {
  const [image, setImage] = useState(background);
  const [title, setTitle] = useState("Welcome to Mental Gym!");
  const history = useHistory();

  const handleMouseOver = (event) => {
    const room = ROOMS[event.target.id];
    setTitle(room.name);
    setImage(room.img);
    return;
  };
  const handleOnClick = (event) => {
    const room = ROOMS[event.target.id];
    history.push("/" + room.name);
  };

  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <div className="Home">
        <img className="background" src={background} alt="background" />
        {ROOM_LIST.map((room) => {
          return (
            <div
              id={room}
              key={room}
              className="selector"
              onMouseOver={handleMouseOver}
              onClick={handleOnClick}
            ></div>
          );
        })}
        <img className="room-selected" src={image} alt="background" />
      </div>
      <div className="logo">
        <img className="goethe" src={goethe} alt="Goethe Institute" />
        <img src={yogapod} alt="YOGAPOD" />
      </div>
      <div className="note">
        *Please using web browser like Google Chrome or Mozilla Firefox for best
        experience
      </div>
    </div>
  );
}

export default Home;

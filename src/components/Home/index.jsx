import { useState } from "react";
import { useHistory } from "react-router-dom";

import "./home.scss";
import background from "../../assets/background.png";
import art from "../../assets/art.png";
import locker from "../../assets/locker.png";
import lounge from "../../assets/lounge.png";
import movement from "../../assets/movement.png";
import smoothie from "../../assets/smoothie.png";
import sound from "../../assets/sound.png";
import spa from "../../assets/spa.png";
import theatre from "../../assets/theatre.png";
import write from "../../assets/write.png";
import yoga from "../../assets/yoga.png";

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
  const history = useHistory();

  const handleMouseOver = (event) => {
    const room = ROOMS[event.target.id];
    return setImage(room.img);
  };
  const handleOnClick = (event) => {
    const room = ROOMS[event.target.id];
    history.push("/" + room.name);
  };

  return (
    <div className="container">
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
        <img className="room" src={image} alt="background" />
      </div>
    </div>
  );
}

export default Home;

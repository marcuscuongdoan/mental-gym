import yoda from "assets/sound/yoda.png";
import ear from "assets/sound/ear.png";
import chicken from "assets/sound/chicken.png";

import vn_meditation from "assets/sound/vn_meditation.mp3";
import eng_meditation from "assets/sound/eng_meditation.mp3";

import Room from "layouts/room";
import { useState } from "react";
import lstrings from "language";

const engVoice = new Audio(eng_meditation);
const vnVoice = new Audio(vn_meditation);

function Sound() {
  const [audio, setAudio] = useState(false);

  const playAudio = () => {
    const isVN = lstrings.getLanguage() === "vn";
    if (isVN) {
      engVoice.pause();
      engVoice.currentTime = 0;
      audio ? vnVoice.pause() : vnVoice.play();
    } else {
      vnVoice.pause();
      vnVoice.currentTime = 0;
      audio ? engVoice.pause() : engVoice.play();
    }
    setAudio(!audio);
  };

  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={yoda} alt="Yoda" />
          </div>
          <div className="item-container">
            <img className="item" src={ear} alt="Ear" onClick={playAudio} />
          </div>
          <div className="item-container">
            <img className="item" src={chicken} alt="Chicken" />
          </div>
        </div>
      </div>
    </Room>
  );
}

export default Sound;

import yoda from "assets/sound/yoda.png";
import ear from "assets/sound/ear.png";
import chicken from "assets/sound/chicken.png";

import vn_meditation from "assets/sound/vn_meditation.mp3";
import eng_meditation from "assets/sound/eng_meditation.mp3";
import hummm from "assets/sound/hummm.mp3";

import Room from "layouts/room";
import { useState } from "react";
import lstrings from "language";

const engVoice = new Audio(eng_meditation);
const vnVoice = new Audio(vn_meditation);
const humVoice = new Audio(hummm);

function Sound() {
  const [audio, setAudio] = useState(false);

  const playAudio = () => {
    humVoice.pause();
    humVoice.pause();
    humVoice.currentTime = 0;
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

  const playHum = () => {
    engVoice.pause();
    engVoice.currentTime = 0;
    vnVoice.pause();
    vnVoice.currentTime = 0;
    humVoice.paused ? humVoice.play() : humVoice.pause();
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
            <img
              className="item"
              src={chicken}
              alt="Chicken"
              onClick={playHum}
            />
          </div>
        </div>
      </div>
    </Room>
  );
}

export default Sound;

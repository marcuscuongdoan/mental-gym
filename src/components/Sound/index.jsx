import "./styles.scss";

import yoda from "assets/sound/yoda.png";
import ear from "assets/sound/ear.png";
import chicken from "assets/sound/chicken.png";

import frame from "assets/poem_frame.png";

import vn_meditation from "assets/sound/vn_meditation.mp3";
import eng_meditation from "assets/sound/eng_meditation.mp3";
import hummm from "assets/sound/hummm.mp3";

import Room from "layouts/room";
import { useState } from "react";
import lstrings from "language";
import Modal from "components/Modal/Modal";

const engVoice = new Audio(eng_meditation);
const vnVoice = new Audio(vn_meditation);
const humVoice = new Audio(hummm);

function Sound() {
  const [audio, setAudio] = useState(false);
  const [show, setShow] = useState(false);

  const openModal = () => {
    engVoice.pause();
    engVoice.currentTime = 0;
    vnVoice.pause();
    vnVoice.currentTime = 0;
    humVoice.pause();
    humVoice.currentTime = 0;
    setShow(true);
  };

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
      <div className="room Sound">
        <div className="row">
          <div className="item-container">
            <img className="item" src={yoda} alt="Yoda" onClick={playAudio} />
          </div>
          <div className="item-container">
            <img className="item" src={ear} alt="Ear" onClick={openModal} />
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
        <Modal show={show} handleClose={() => setShow(false)}>
          <div className="poem">
            <div className="description">
              <img className="frame" src={frame} alt="Frame" />
              <div className="description-text">
                {lstrings.getLanguage() === "vn" ? (
                  <>
                    Lắng Nghe Xung Quanh
                    <ul>
                      <li>Nhắm mắt lại</li>
                      <li>Thở thật sâu - Hít vào - Thở ra- làm 5 lần</li>
                      <li>Tập trung vào 3 âm thanh xa bạn nhất</li>
                      <li>Tập trung vào 3 âm thanh gần bạn nhất</li>
                    </ul>
                  </>
                ) : (
                  <>
                    Listen to Your Surroundings
                    <ul>
                      <li>Close your Eyes</li>
                      <li>Take a deep breathe - In - Out - Repeat 5 times</li>
                      <li>Focus on 3 sounds furthest away from you</li>
                      <li>Focus on 3 sounds nearest to you</li>
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Room>
  );
}

export default Sound;

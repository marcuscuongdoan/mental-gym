import "./styles.scss";
import yoga from "assets/yoga/yoga.png";
import Modal from "components/Modal/Modal";
import lstrings from "language";
import video_frame from "assets/video_frame.png";

import Room from "layouts/room";
import { useState } from "react";
import ReactPlayer from "react-player";

function Yoga() {
  const [show, setShow] = useState(false);
  return (
    <Room>
      <div className="room Yoga">
        <div className="row">
          <img
            className="item"
            src={yoga}
            alt="Yoga"
            onClick={() => setShow(true)}
          />
        </div>
        <Modal show={show} handleClose={() => setShow(false)}>
          <img className="frame" src={video_frame} alt="Frame" />
          <div className="player">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=gGCyEkhV0zw"
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 1,
                    origin: "https://mental-gym.vercel.app",
                  },
                },
              }}
              width={"100%"}
              height={"100%"}
            />
          </div>
          <p className="author">{lstrings.yogaRoom.description}</p>
        </Modal>
      </div>
    </Room>
  );
}

export default Yoga;

import "./styles.scss";
import Room from "layouts/room";
import movement_1 from "assets/movement/movement_1.png";
import movement_2 from "assets/movement/movement_2.png";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import video_frame from "assets/video_frame.png";
import lstrings from "language";

function Movement() {
  const [show, setShow] = useState(false);
  const [blue, setBlue] = useState(0);

  function showModal(number) {
    setShow(true);
    setBlue(number);
  }

  return (
    <Room>
      <div className="room Movement">
        <div className="row">
          <div className="item-container">
            <img
              className="item"
              src={movement_1}
              alt="Movement"
              onClick={() => showModal(0)}
            />
          </div>
          <div className="item-container">
            <img
              className="item"
              src={movement_2}
              alt="Movement"
              onClick={() => showModal(1)}
            />
          </div>
        </div>
        <Modal show={show} handleClose={() => setShow(false)}>
          <img className="frame" src={video_frame} alt="Frame" />
          <div className="player">
            <iframe
              title="Video"
              style={{ width: "100%", height: "100%" }}
              src={(blue
                ? lstrings.getLanguage() === "vn"
                  ? "https://www.youtube.com/watch?v=dJV0LpXDcuk"
                  : "https://www.youtube.com/watch?v=tSGCzSYTq-I"
                : "https://www.youtube.com/watch?v=KZm8qHuOaIw"
              ).replace("/watch?v=", "/embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
          <p className="author">
            {blue
              ? lstrings.movementRoom.thanh_toan
              : lstrings.movementRoom.mai_anh}
          </p>
        </Modal>
      </div>
    </Room>
  );
}

export default Movement;

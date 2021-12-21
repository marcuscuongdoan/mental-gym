import Room from "layouts/room";
import movement_1 from "assets/movement/movement_1.png";
import movement_2 from "assets/movement/movement_2.png";
import { useState } from "react";
import Modal from "components/Modal/Modal";
import ReactPlayer from "react-player";
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
      <div className="room">
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
      </div>
      <Modal show={show} handleClose={() => setShow(false)}>
        <ReactPlayer
          url={
            blue
              ? lstrings.getLanguage() === "vn"
                ? "https://www.youtube.com/watch?v=dJV0LpXDcuk"
                : "https://www.youtube.com/watch?v=tSGCzSYTq-I"
              : "https://www.youtube.com/watch?v=KZm8qHuOaIw"
          }
          config={{ youtube: { layerVars: { showinfo: 1 } } }}
          width={"100%"}
          height={"calc(9 / 16 * 50vw)"}
        />
        <p>
          {blue
            ? lstrings.movementRoom.thanh_toan
            : lstrings.movementRoom.mai_anh}
        </p>
      </Modal>
    </Room>
  );
}

export default Movement;

import yoga from "assets/yoga/yoga.png";
import Modal from "components/Modal/Modal";
import lstrings from "language";

import Room from "layouts/room";
import { useState } from "react";
import ReactPlayer from "react-player";

function Yoga() {
  const [show, setShow] = useState(false);
  return (
    <Room>
      <div className="room">
        <div className="row">
          <img
            className="item"
            src={yoga}
            alt="Yoga"
            onClick={() => setShow(true)}
          />
        </div>
      </div>
      <Modal show={show} handleClose={() => setShow(false)}>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=gGCyEkhV0zw"
          config={{ youtube: { layerVars: { showinfo: 1 } } }}
          width={"100%"}
          height={"calc(9 / 16 * 50vw)"}
        />
        <p>{lstrings.yogaRoom.description}</p>
      </Modal>
    </Room>
  );
}

export default Yoga;

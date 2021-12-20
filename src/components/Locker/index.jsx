import { useState } from "react";
import ReactPlayer from "react-player";
import locker_blue from "assets/locker/locker_blue.png";
import locker_yellow from "assets/locker/locker_yellow.png";
import Room from "layouts/room";
import Modal from "../Modal/Modal";

function Locker() {
  const [show, setShow] = useState(false);
  const [blue, setBlue] = useState(true);

  function showModal() {
    setShow(true);
  }

  return (
    <Room>
      <div className="room">
        <div className="row">
          <div
            className="item-container"
            onClick={() => {
              showModal();
              setBlue(true);
            }}
          >
            <img className="item" src={locker_blue} alt="Blue" />
          </div>
          <div
            className="item-container"
            onClick={() => {
              showModal();
              setBlue(false);
            }}
          >
            <img className="item" src={locker_yellow} alt="Yellow" />
          </div>
        </div>
      </div>
      <Modal show={show} handleClose={() => setShow(false)}>
        <ReactPlayer
          url={
            blue
              ? "https://www.youtube.com/watch?v=hFfvVBJYOpM"
              : "https://www.youtube.com/watch?v=l0pO_zVZA5Iw"
          }
          config={{ youtube: { layerVars: { showinfo: 1 } } }}
          width={"100%"}
          height={"calc(9 / 16 * 50vw)"}
        />
      </Modal>
    </Room>
  );
}

export default Locker;

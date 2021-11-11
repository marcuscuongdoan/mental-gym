import hourglass from "../../assets/write/hourglass.png";
import portal from "../../assets/write/portal.png";

import Room from "../../layouts/room";

function Write() {

  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={hourglass} alt="Hourglass" />
          </div>
          <div className="item-container">
            <img className="item" src={portal} alt="Portal" />
          </div>
        </div>
      </div>
      </Room>
  );
}

export default Write;

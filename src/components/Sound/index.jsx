import yoda from "../../assets/sound/yoda.png";
import ear from "../../assets/sound/ear.png";
import chicken from "../../assets/sound/chicken.png";

import Room from "../../layouts/room";

function Sound() {

  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={yoda} alt="Yoda" />
          </div>
          <div className="item-container">
            <img className="item" src={ear} alt="Ear" />
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

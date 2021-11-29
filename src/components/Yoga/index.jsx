import yoga from "../../assets/yoga/yoga.png";

import Room from "../../layouts/room";

function Yoga() {

  return (
    <Room>
      <div className="room">
        <div className="row">
            <img className="item" src={yoga} alt="Yoga" />
        </div>
      </div>
      </Room>
  );
}

export default Yoga;

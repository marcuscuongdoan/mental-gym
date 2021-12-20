import Room from "layouts/room";
import movement_1 from "assets/movement/movement_1.png";
import movement_2 from "assets/movement/movement_2.png";

function Movement() {
  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={movement_1} alt="Movement" />
          </div>
          <div className="item-container">
            <img className="item" src={movement_2} alt="Movement" />
          </div>
        </div>
      </div>
    </Room>
  );
}

export default Movement;

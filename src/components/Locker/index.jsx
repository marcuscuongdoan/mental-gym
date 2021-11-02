import locker_blue from "../../assets/locker/locker_blue.png";
import locker_yellow from "../../assets/locker/locker_yellow.png";
import Room from "../../layouts/room";

function Locker() {
  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={locker_blue} alt="Blue" />
          </div>
          <div className="item-container">
            <img className="item" src={locker_yellow} alt="Yellow" />
          </div>
        </div>
      </div>
    </Room>
  );
}

export default Locker;

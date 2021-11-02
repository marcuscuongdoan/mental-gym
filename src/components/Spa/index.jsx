import "./styles.scss";

import sauna from "../../assets/spa/sauna.png";
import Room from "../../layouts/room";

function Spa() {
  return (
    <Room>
      <div className="room">
        <img className="item" src={sauna} alt="Sauna" />
      </div>
    </Room>
  );
}

export default Spa;

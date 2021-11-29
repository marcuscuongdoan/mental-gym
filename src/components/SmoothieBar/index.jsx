import "./styles.scss";
import red from "../../assets/smoothie_bar/red.png";
import sand from "../../assets/smoothie_bar/sand.png";
import yellow from "../../assets/smoothie_bar/yellow.png";
import pink from "../../assets/smoothie_bar/pink.png";
import green from "../../assets/smoothie_bar/green.png";
import Room from "../../layouts/room";

function SmoothieBar() {
  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={red} alt="Red" />
          </div>
          <div className="item-container">
            <img className="item" src={sand} alt="Sand" />
          </div>
          <div className="item-container">
            <img className="item" src={yellow} alt="Yellow" />
          </div>
          <div className="item-container">
            <img className="item" src={pink} alt="Pink" />
          </div>
          <div className="item-container">
            <img className="item" src={green} alt="Green" />
          </div>
        </div>
      </div>
    </Room>
  );
}

export default SmoothieBar;

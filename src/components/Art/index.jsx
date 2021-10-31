import "./art.scss";

import art_1 from "../../assets/art/art_1.png";
import art_2 from "../../assets/art/art_2.png";
import art_3 from "../../assets/art/art_3.png";
import neuroart from "../../assets/art/neuroart.png";
import zentangle from "../../assets/art/zentangle.png";
import mental_check from "../../assets/art/mental_check.png";

function Art() {
  return (
    <div className="container">
      <div className="art">
        <div className="row">
          <div className="art-item">
            <img className="item" src={neuroart} alt="Neuroart" />
            <img className="person" src={art_1} alt="art1" />
          </div>
          <div className="art-item">
            <img className="item" src={zentangle} alt="Zentangle" />
            <img className="person" src={art_2} alt="art2" />
          </div>
          <div className="art-item">
            <img className="item" src={mental_check} alt="Mental Check" />
            <img className="person" src={art_3} alt="art3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Art;

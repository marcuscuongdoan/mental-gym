import { useHistory } from "react-router-dom";

import hourglass from "../../assets/write/hourglass.png";
import portal from "../../assets/write/portal.png";

import back_button from "../../assets/back.png";

function Write() {
  const history = useHistory();

  return (
    <div className="container">
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
      <div className="back-button">
        <img src={back_button} alt="Back" onClick={() => history.goBack()} />
      </div>
    </div>
  );
}

export default Write;

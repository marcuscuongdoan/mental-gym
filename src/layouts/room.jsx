import { useHistory } from "react-router-dom";
import back_button from "../assets/back.png";

function Room({ children }) {
  const history = useHistory();

  return (
    <div className="container">
      {children}
      <div className="back-button">
        <img src={back_button} alt="Back" onClick={() => history.goBack()} />
      </div>
    </div>
  );
}

export default Room;

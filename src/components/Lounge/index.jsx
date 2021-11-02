import "./styles.scss";
import Room from "../../layouts/room";
import book_1 from "../../assets/lounge/book_1.png";
import book_2 from "../../assets/lounge/book_2.png";
import book_3 from "../../assets/lounge/book_3.png";
import decoration from "../../assets/lounge/decoration.png";

function Lounge() {
  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img className="item" src={book_1} alt="Book" />
          </div>
          <div className="item-container">
            <img className="item" src={book_2} alt="Book" />
          </div>
          <div className="item-container">
            <img className="item" src={book_3} alt="Book" />
          </div>
        </div>
        <img className="decoration" src={decoration} alt="Decoration" />
      </div>
    </Room>
  );
}

export default Lounge;

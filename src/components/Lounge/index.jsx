import "./styles.scss";
import Room from "layouts/room";
import book_1 from "assets/lounge/book_1.png";
import book_2 from "assets/lounge/book_2.png";
import book_3 from "assets/lounge/book_3.png";
import decoration from "assets/lounge/decoration.png";

function Lounge() {
  return (
    <Room>
      <div className="room">
        <div className="row">
          <div className="item-container">
            <img
              className="item"
              src={book_1}
              alt="Book"
              onClick={() =>
                window.open(
                  "https://beautifulmindvn.com/2017/10/09/de-co-mot-giac-ngu-ngon/?fbclid=IwAR1r1h97R-yXZIkWXaxZncmNjihdaN6EF-m3HNRDIMx-CCpHP-txHMzUDU8"
                )
              }
            />
          </div>
          <div className="item-container">
            <img
              className="item"
              src={book_2}
              alt="Book"
              onClick={() =>
                window.open(
                  "https://beautifulmindvn.com/2017/02/23/vuot-qua-su-nhay-cam-cua-ban-than-cach-tim-hieu-ve-cam-xuc-cua-minh/?fbclid=IwAR0RIC2Anf1a1HzqnO_VKh3KpmtoH5VBFSKOnzhFqtDKzQ5Tcge_6OBs5Fk"
                )
              }
            />
          </div>
          <div className="item-container">
            <img
              className="item"
              src={book_3}
              alt="Book"
              onClick={() =>
                window.open(
                  "https://beautifulmindvn.com/2017/02/25/vuot-qua-su-nhay-cam-cua-ban-than-tim-hieu-ve-nhung-suy-nghi-cua-ban-than/?fbclid=IwAR3sR5yM4FYpXmPCpaJBS5X4l7vd9VRjFP6e8X4azHeokBsk3faDMpmYJxM"
                )
              }
            />
          </div>
        </div>
        <img className="decoration" src={decoration} alt="Decoration" />
      </div>
    </Room>
  );
}

export default Lounge;

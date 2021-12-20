import "./styles.scss";
import red from "../../assets/smoothie_bar/red.png";
import sand from "../../assets/smoothie_bar/sand.png";
import yellow from "../../assets/smoothie_bar/yellow.png";
import pink from "../../assets/smoothie_bar/pink.png";
import green from "../../assets/smoothie_bar/green.png";
import Room from "../../layouts/room";
import Modal from "../Modal/Modal";
import tam_poem_cover from "../../assets/smoothie_bar/tam_poem_cover.png";
import { useState } from "react";

function SmoothieBar() {
  const [show, setShow] = useState(false);

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
          <div className="item-container" onClick={() => setShow(true)}>
            <img className="item" src={pink} alt="Pink" />
          </div>
          <div className="item-container">
            <img className="item" src={green} alt="Green" />
          </div>
        </div>
      </div>

      <Modal show={show} handleClose={() => setShow(false)}>
        <div className="poem">
          <img src={tam_poem_cover} alt="cover" />
          <div>
            The night he picked up debris of his name and left <br /> <br />
            don't hand me anything <br />
            delicate cause I’ll just ruin it <br />
            by the touch of a finger <br />
            you warned but he <br />
            lent you his calloused palms, <br />
            and for the first time your hands ceased <br />
            to mistake themselves as an animal’s <br />
            you realized the delicacy of a touch <br />
            is how he plucked <br />
            off bits of superglue on his <br />
            lips when he was little for <br />
            he didn't know every articulation must <br />
            beg for mercy before slipping out <br />
            a mouth when that night <br />
            he drove his brother’s scooter <br />
            as fast as sixty just to see you <br />
            another boy forgotten he <br />
            cried rigorously: I don't know but <br />
            please don't leave me behind <br />
            you told him: we have come <br />
            this far just to remain <br />
            tender it's okay to spare <br />
            another hour to forget your boyhood <br />
            just when he planted <br />
            his lips on the same place <br />
            your mother's prayers carved <br />
            themselves on your names <br />
            shattered in the air before <br />
            falling abruptly to the ground <br />
            like clutched birds <br />
            because a man kissing a man is a <br />
            murder of all sacred words <br />
            you were nothing but wild <br />
            cardinals creeping into a nest <br />
            sealing behind the false ribs of a father <br /> <br />
            <i>
              This open first appeared in the micro-chapbook Our Delicates by
              Tam Nguyen - published by Wintercrearig Project (2020), edited and
              reprinted on Dryland magazine issue 11 (2021)
            </i>
          </div>
        </div>
      </Modal>
    </Room>
  );
}

export default SmoothieBar;

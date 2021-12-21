import "./styles.scss";
import red from "assets/smoothie_bar/red.png";
import sand from "assets/smoothie_bar/sand.png";
import yellow from "assets/smoothie_bar/yellow.png";
import pink from "assets/smoothie_bar/pink.png";
import green from "assets/smoothie_bar/green.png";
import frame from "assets/poem_frame.png";
import Room from "layouts/room";
import Modal from "../Modal/Modal";
import tam_poem_cover from "assets/smoothie_bar/tam_poem_cover.png";
import { useState } from "react";

const poems = [
  <div className="poem-text">
    <b>ROOFTOP GARDENING</b> <br /> <br />
    On a clear day like today <br />
    I can see the tree blanketed <br />
    mountain chain in the distance <br />
    as I water my domesticated plants <br />
    on the rooftop. <br /> <br />
    I don’t nurture them the way <br />
    my grandmother taught me, <br />
    by humming lullabies <br />
    into their leaves as water seeps <br />
    into their roots. <br /> <br />
    I never told her that I didn’t believe <br />
    that’s how it worked, but I think of her <br />
    often and admire the superstitious <br />
    belief in that natural alchemy <br />
    that could turn melody into petals. <br /> <br />
    But if I am to believe my plants <br />
    can hear me, I have to believe <br />
    they can see the confinement <br />
    of their planters and the chain <br />
    linked prison up here, four stories <br />
    above the soil. <br /> <br />
    I’d have to believe the plants <br />
    whistle rueful work songs <br />
    through green veins as they peer <br />
    over the broken teeth of the skyline <br />
    and long for a way out. <br /> <br />
    If I am to see my plants <br />
    as sentient, I have to wonder <br />
    how acutely they feel the futility <br />
    of their respiration against <br />
    the smog blanketing the only view <br />
    they’ve ever had. <br /> <br />
    <b style={{ float: "right" }}>
      <i>Ed Wade</i>
    </b>
  </div>,
  <div className="poem-text">
    Chìa bàn tay em ra <br />
    Lại đây với ta <br />
    Đừng lo sợ <br />
    Bóng đêm ta là nhà <br />
    Em hãy nhớ. <br /> <br />
    Thở đi <br />
    Em có nghe lá thầm thì <br />
    Từ trong sâu thẳm của cành của cội <br />
    Rễ ta bám vào bóng tối <br />
    Đỡ lấy những giờ sám hối <br />
    Tái sinh. <br /> <br />
    Gieo em vào ta <br />
    Nhắm mắt <br />
    Để bầy dơi đêm vẽ hình gương mặt <br />
    Lạc loài <br />
    Đêm nay trăm nghìn cổ thụ <br />
    Hoài thai. <br /> <br />
    Lại đây em <br />
    Ta là rừng đêm <br /> <br />
    Là em - bản thể. <br /> <br />
    <b style={{ float: "right" }}>
      <i>Nguyễn Thanh Bình</i>
    </b>
  </div>,
  <div className="poem-text">
    <b>LOÀI</b> <br />
    <br />
    Ôm những thân cây <br />
    Bóng đêm nhảy nhót <br />
    Hoang mang như dây leo phủ đầy <br />
    Rừng sâu có loài dại dột. <br />
    Loài phủ tóc vào rễ <br />
    Nỉ non khóc xác côn trùng <br />
    Loài trẫm mình trong lá <br />
    Máu hoà cùng nhựa cây rung. <br />
    Rùng rùng rùng rùng <br />
    Loài phơi da người bên suối <br />
    Ai như tiếng trăng cười <br />
    Nước vỡ ra chờ đợi. <br />
    Đêm tàn <br />
    Kìa tiếng chân báo đốm đi hoang. <br />
    <br />
    <b style={{ float: "right" }}>
      <i>Tạ Anh Thư</i>
    </b>
  </div>,
  <div className="poem-text">
    <img src={tam_poem_cover} alt="Cover" />
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
      This open first appeared in the micro-chapbook Our Delicates by Tam Nguyen
      - published by Wintercrearig Project (2020), edited and reprinted on
      Dryland magazine issue 11 (2021)
    </i>
  </div>,
  <div className="poem-text">
    When I was seven my aunt said to me <br />
    Another cactus week and you’d have the moon to <br />
    shred <br />
    I did not know what she meant <br />
    Until I was eight <br />
    And she said <br />
    Half a cactus week more <br />
    I thought by the time I was ten <br />
    Something long forgotten should rise <br />
    And havoc <br />
    And have thorns and pierce my eyes out like a fox <br />
    And turn back into the moon <br />
    **Which I’d shred <br />
    And not forgiving <br />
    The week that had gone <br />
    By nine and a half <br />
    My fangs were sharp and my ears sharper <br />
    And all fiber in my lungs shield them up <br />
    And scales covered my back <br />
    And my eyes could see farther than the eagle’s third <br />
    mind <br />
    A quarter to nine <br />
    My stomach could digest a whole worm <br />
    And my throat spit storms <br />
    And my growl scared even my aunt <br />
    Who said <br />
    Did you forget <br />
    The moon <br />
    Oh the moon <br />
    That hadn’t appear for a hundred and seven years <br />
    In the songs of dirt <br />
    But aunt here I am waiting <br />
    With my fangs and wings <br />
    For another cactus week <br />
    My aunt got sick <br />
    And silent <br />
    And the count slowed down <br />
    Until <br />
    The twin of the sun <br />
    Jerked a ball towards us <br />
    That was the last week <br />
    Before I turned ten <br />
    And my heart <br />
    Swallowed the heat <br />
    And my aunt <br />
    With one eye still glimmering with hunger and hatred <br />
    Ripped it off me <br />
    The sun shone <br />
    On what later would be called <br />
    The young moon shredder <br />
    Who - poor her - never <br />
    Had reached the final cactus week <br />
    With arms as thick <br />
    As mongo trees <br />
    And legs <br />
    As strong <br />
    As the color of dawn <br />
    And nose <br />
    That could sniff out every ant in any corner of the world <br />
    Poor her <br />
    The one forgotten <br />
    But not forgiven <br />
    For <br />
    Searchingg for a moon <br />
    To shred <br /> <br />
    <b style={{ float: "right" }}>
      <i>Nguyễn Bích Trà</i>
    </b>
  </div>,
];

function SmoothieBar() {
  const [show, setShow] = useState(false);
  const [poem, setPoem] = useState(0);

  const openPoem = (poemNumber) => {
    setShow(true);
    setPoem(poemNumber);
  };

  return (
    <Room>
      <div className="room SmoothieBar">
        <div className="row">
          <div className="item-container" onClick={() => openPoem(0)}>
            <img className="item" src={red} alt="Red" />
          </div>
          <div className="item-container" onClick={() => openPoem(1)}>
            <img className="item" src={sand} alt="Sand" />
          </div>
          <div className="item-container" onClick={() => openPoem(2)}>
            <img className="item" src={yellow} alt="Yellow" />
          </div>
          <div className="item-container" onClick={() => openPoem(3)}>
            <img className="item" src={pink} alt="Pink" />
          </div>
          <div className="item-container" onClick={() => openPoem(4)}>
            <img className="item" src={green} alt="Green" />
          </div>
        </div>

        <Modal show={show} handleClose={() => setShow(false)}>
          <div className="poem">
            <img className="frame" src={frame} alt="Frame" />
            {poems[poem]}
          </div>
        </Modal>
      </div>
    </Room>
  );
}

export default SmoothieBar;

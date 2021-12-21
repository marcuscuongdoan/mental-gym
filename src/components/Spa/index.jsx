import "./styles.scss";

import sauna from "assets/spa/sauna.png";
import bach_cang_thang from "assets/spa/bach_cang_thang.jpg";
import bach_lo_au from "assets/spa/bach_lo_au.jpg";
import bach_tram_cam from "assets/spa/bach_tram_cam.jpg";
import linh_cang_thang from "assets/spa/linh_cang_thang.jpg";
import linh_lo_au from "assets/spa/linh_lo_au.jpg";
import linh_tram_cam from "assets/spa/linh_tram_cam.jpg";
import tam_cang_thang from "assets/spa/tam_cang_thang.jpg";
import tam_lo_au from "assets/spa/tam_lo_au.jpg";
import tam_tram_cam from "assets/spa/tam_tram_cam.jpg";
import Room from "layouts/room";
import Modal from "components/Modal/Modal";
import { useState } from "react/cjs/react.development";

const images = [
  bach_cang_thang,
  bach_lo_au,
  bach_tram_cam,
  linh_cang_thang,
  linh_lo_au,
  linh_tram_cam,
  tam_cang_thang,
  tam_lo_au,
  tam_tram_cam,
];
function Spa() {
  const [show, setShow] = useState({ show: false, img: 0 });

  function openImage(number) {
    setShow({ show: true, img: number });
  }

  function closeModal() {
    setShow({ ...show, show: false });
  }
  return (
    <Room>
      <div className="room Spa">
        <img className="item" src={sauna} alt="Sauna" />
        <div className="image-container">
          <img
            src={bach_cang_thang}
            alt="Căng Thẳng"
            onClick={() => openImage(0)}
          />
          <img src={bach_lo_au} alt="Lo Âu" onClick={() => openImage(1)} />
          <img
            src={bach_tram_cam}
            alt="Trầm Cảm"
            onClick={() => openImage(2)}
          />
          <img
            src={linh_cang_thang}
            alt="Căng Thẳng"
            onClick={() => openImage(3)}
          />
          <img src={linh_lo_au} alt="Lo Âu" onClick={() => openImage(4)} />
          <img
            src={linh_tram_cam}
            alt="Trầm Cảm"
            onClick={() => openImage(5)}
          />
          <img
            src={tam_cang_thang}
            alt="Căng Thẳng"
            onClick={() => openImage(6)}
          />
          <img src={tam_lo_au} alt="Lo Âu" onClick={() => openImage(7)} />
          <img src={tam_tram_cam} alt="Trầm Cảm" onClick={() => openImage(8)} />
        </div>
        <Modal show={show.show} handleClose={closeModal}>
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            src={images[show.img]}
            alt="Full"
          />
        </Modal>
      </div>
    </Room>
  );
}

export default Spa;

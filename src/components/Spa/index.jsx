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
import { useState } from "react";
import video_frame from "assets/video_frame.png";
import { useEffect, useRef } from "react";

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

const author = [
  "Căng Thẳng - Trương Xuân Bách",
  "Lo Âu - Trương Xuân Bách",
  "Trầm Cảm - Trương Xuân Bách",
  "Căng Thẳng - Liêng Trương Trúc Linh",
  "Lo Âu - Liêng Trương Trúc Linh",
  "Trầm Cảm - Liêng Trương Trúc Linh",
  "Căng Thẳng - Nguyễn Thành Minh Tâm",
  "Lo Âu - Nguyễn Thành Minh Tâm",
  "Trầm Cảm - Nguyễn Thành Minh Tâm",
];
function Spa() {
  const [show, setShow] = useState({ show: false, img: 0 });
  const ref = useRef();

  useEffect(() => {
    let isDown = false;
    let startX;
    let scrollLeft;
    const current = ref.current;

    const onMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - current.offsetLeft;
      scrollLeft = current.scrollLeft;
    };
    const onMouseLeaveAndUp = () => {
      isDown = false;
    };
    const onMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - current.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      current.scrollLeft = scrollLeft - walk;
    };

    current.addEventListener("mousedown", onMouseDown);
    current.addEventListener("mouseleave", onMouseLeaveAndUp);
    current.addEventListener("mouseup", onMouseLeaveAndUp);
    current.addEventListener("mousemove", onMouseMove);

    return () => {
      current.removeEventListener("mousedown", onMouseDown);
      current.removeEventListener("mouseleave", onMouseLeaveAndUp);
      current.removeEventListener("mouseup", onMouseLeaveAndUp);
      current.removeEventListener("mousemove", onMouseMove);
    };
  });

  function openImage(number) {
    setShow({ show: true, img: number });
  }

  function closeModal() {
    setShow({ ...show, show: false });
  }
  return (
    <Room>
      <div className="room Spa">
        <div className="main-spa">
          <img className="item" src={sauna} alt="Sauna" />
          <div className="image-container" ref={ref}>
            <img
              draggable={false}
              src={bach_cang_thang}
              alt="Căng Thẳng"
              onClick={() => openImage(0)}
            />
            <img
              draggable={false}
              src={bach_lo_au}
              alt="Lo Âu"
              onClick={() => openImage(1)}
            />
            <img
              draggable={false}
              src={bach_tram_cam}
              alt="Trầm Cảm"
              onClick={() => openImage(2)}
            />
            <img
              draggable={false}
              src={linh_cang_thang}
              alt="Căng Thẳng"
              onClick={() => openImage(3)}
            />
            <img
              draggable={false}
              src={linh_lo_au}
              alt="Lo Âu"
              onClick={() => openImage(4)}
            />
            <img
              draggable={false}
              src={linh_tram_cam}
              alt="Trầm Cảm"
              onClick={() => openImage(5)}
            />
            <img
              draggable={false}
              src={tam_cang_thang}
              alt="Căng Thẳng"
              onClick={() => openImage(6)}
            />
            <img
              draggable={false}
              src={tam_lo_au}
              alt="Lo Âu"
              onClick={() => openImage(7)}
            />
            <img
              draggable={false}
              src={tam_tram_cam}
              alt="Trầm Cảm"
              onClick={() => openImage(8)}
            />
          </div>
        </div>
        <Modal show={show.show} handleClose={closeModal}>
          <img className="frame" src={video_frame} alt="Frame" />
          <div className="photo">
            <img src={images[show.img]} alt="Full" />
          </div>
          <p className="author">{author[show.img]}</p>
        </Modal>
      </div>
    </Room>
  );
}

export default Spa;

import "./styles.scss";
import art_1 from "assets/art/art_1.png";
import art_2 from "assets/art/art_2.png";
import art_3 from "assets/art/art_3.png";
import neuroart from "assets/art/neuroart.png";
import zentangle from "assets/art/zentangle.png";
import mental_check from "assets/art/mental_check.png";
import Room from "layouts/room";
import { Document, Page, pdfjs } from "react-pdf";
import Modal from "components/Modal/Modal";
import { useState } from "react";
import lstrings from "language";
import video_frame from "assets/video_frame.png";
import mc_step_1 from "assets/art/mental-checkin/step_1.jpg";
import mc_step_2 from "assets/art/mental-checkin/step_2.jpg";
import mc_step_3 from "assets/art/mental-checkin/step_3.jpg";
import mc_step_4 from "assets/art/mental-checkin/step_4.jpg";
import na_step_1 from "assets/art/zentangle/step_1.jpg";
import na_step_2 from "assets/art/zentangle/step_2.jpg";
import na_step_3 from "assets/art/zentangle/step_3.jpg";
import na_step_4 from "assets/art/zentangle/step_4.jpg";
import na_step_5 from "assets/art/zentangle/step_5.jpg";
import na_step_6 from "assets/art/zentangle/step_6.jpg";
import na_step_7 from "assets/art/zentangle/step_7.jpg";
import na_step_8 from "assets/art/zentangle/step_8.jpg";

import olga from "assets/art/olga.pdf";
import olga_vn from "assets/art/olga_vn.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Art() {
  const [show, setShow] = useState(false);
  const [item, setItem] = useState(0);
  const [numPages, setNumPages] = useState(null);

  function closeModal() {
    setShow(false);
  }

  function openModal(number) {
    setShow(true);
    setItem(number);
  }

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function createPages(numPages) {
    var pages = [];
    for (var i = 1; i <= numPages; i++) {
      pages.push(<Page pageNumber={i} key={"page " + i} />);
    }
    return pages;
  }

  return (
    <Room>
      <div className="room Art">
        <div className="row">
          <div className="item-container">
            <img
              className="item"
              src={neuroart}
              alt="Neuroart"
              onClick={() => openModal(0)}
            />
            <img className="person" src={art_1} alt="art1" />
          </div>
          <div className="item-container">
            <img
              className="item"
              src={zentangle}
              alt="Zentangle"
              onClick={() => openModal(1)}
            />
            <img className="person" src={art_2} alt="art2" />
          </div>
          <div className="item-container">
            <img
              className="item"
              src={mental_check}
              alt="Mental Check"
              onClick={() => openModal(2)}
            />
            <img className="person" src={art_3} alt="art3" />
          </div>
        </div>
        <Modal show={show} handleClose={closeModal}>
          {item === 0 ? (
            <Document
              className="document"
              file={lstrings.getLanguage() === "vn" ? olga_vn : olga}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {createPages(numPages)}
            </Document>
          ) : item === 1 ? (
            <>
              <img className="frame" src={video_frame} alt="Frame" />
              <div className="photo">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_1}
                  alt="Step"
                />
                Step 1
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_2}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_3}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_4}
                  alt="Step"
                />
                Step 2
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_5}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_6}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_7}
                  alt="Step"
                />
                Result:
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={na_step_8}
                  alt="Step"
                />
              </div>
              <div className="description">
                {lstrings.getLanguage() === "vn" ? (
                  <>
                    Nh???ng nghi??n c???u g???n ????y ???? ph??t hi???n ra <i>Zentangle</i> -
                    m???t d???ng b??i t???p k???t h???p gi???a thi???n ?????nh v?? v??? ngu???ch ngo???c.
                    ????y l?? m???t c??ch nhanh v?? hi???u qu??? ????? gi???m c??ng th???ng, c??ng
                    nh?? l???y l???i s??? t???p trung nh??? v??o vi???c l???p l???i s??? t????ng ?????ng
                    ????? th???c h??nh t???nh th???c, ph????ng ph??p n??y s??? d???a tr??n vi???c ch??
                    ?? v??o tr???ng t??m c???a h??nh v??? ngay t???i th???i ??i???m ????. <br />
                    M???t s??? ??i???u c???n l??u ??:
                    <ul>
                      <li>
                        B???n kh??ng c???n ph???i l?? m???t ngh??? s?? m???i c?? th??? v???
                        Zentangle
                      </li>
                      <li>Kh??ng t???y x??a!</li>
                      <li>
                        ??i???m nh???n ??? b??i t???p n??y s??? l?? t???o t??? t???p trung c?? ch???
                        ????ch - ch??? c???n ch?? t??m v??o m???i ???????ng n??t b???n t???o ra tr??n
                        gi???y
                      </li>
                      <li>S??? kh??ng c?? c??u tr??? l???i ????ng ho???c sai</li>
                      <li>
                        H??y th??? t???o ra m???t b???c ???nh c?? hoa v??n l???p l???i (nh?? ???nh
                        minh h???a b??n d?????i)
                      </li>
                    </ul>
                    Chu???n b???: m???t c??y b??t m???c (khuy???n kh??ch d??ng b??t m???c inl
                    ??en), m???t c??y b??t ch??, m???t ho???c nhi???u m???nh gi???y 5*5 cm.
                    <br />
                    <br />
                    B?????c 1: V??? nh???ng n??t m???ng, h??y c??? t?????ng t?????ng v??? vi???c l??m
                    c??ch n??o ????? c?? th??? t???n d???ng nh???ng kho???ng tr???ng trong t???
                    gi???y. <br />
                    <br />
                    B?????c 2: B???t ?????u v??? t??? gi???y v???i c??c h??nh m???u - b???n c?? th??? b???t
                    ?????u v???i nh???ng n??t b???n th??ch ho???c m???t v??i m???u m?? ch??ng ta c??
                    ??? ????y - h??y nh??? l?? l???p l???i ch??ng. <br />
                    <br />
                    B?????c 2.2: ?????ng qu??n ti???p t???c h??t th??? ?????u ?????n nh??! <br />
                    <br />
                    B?????c 3: Ngay khi b???n ho??n th??nh nh???ng ???????ng n??t c?? b???n tr??n
                    gi???y, h??y k??o d??i n??t v??? ra nh???ng ph???n m??u tr???ng c??n l???i c???a
                    b???c v???, ????? s??ng t???o m???t v??i th??? *sang ch???nh* c?? chi???u s??u.
                    <br />
                    <br />
                    B?????c 4: B???n ???? ho??n th??nh m???t h??nh v??? Zentangle cho ri??ng
                    b???n. H??y t??? do c???m nh???n v?? chia s??? n?? v???i ng?????i kh??c trong
                    ph???n b??nh lu???n b??n d?????i nh??! <br />
                    <br />
                  </>
                ) : (
                  <>
                    Recent studies have found that <i>Zentangle</i> ??? a hybrid
                    between Zen practice and doodling, to be a quick and
                    efficient way to de-stress and regain concentration thanks
                    to its resemblance to other mindfulness meditative practice,
                    whose method is based on the act of focusing on a certain
                    subject at time.
                    <br />
                    Some rules:
                    <br />
                    <ul>
                      <li>You don???t have to be an artist!</li>
                      <li>No erasure!</li>
                      <li>
                        The goal here is to create an{" "}
                        <b>
                          <i>intentional concentration</i>
                        </b>
                        - let???s just focus on every stroke you make on the paper
                      </li>
                      <li>There???s no right or wrong answer</li>
                      <li>
                        Try to create a{" "}
                        <b>
                          <i>repeating pattern</i>
                        </b>{" "}
                        (see the photos for references)
                      </li>
                    </ul>
                    Preparation: one (1) pen (black ink recommended), one (1)
                    pencil, one (1) or more pieces of 5*5 cm paper
                    <br />
                    <br />
                    Step 1: Draw the outlines, try your best to imagine how you
                    will utilize every blank space of the paper
                    <br />
                    <br />
                    Step 2: Start filling in with the patterns - you can come up
                    with your own or refer to some of the patterns we have here
                    - remember to make it{" "}
                    <b>
                      <i>repetitive!</i>
                    </b>
                    <br />
                    <br />
                    Step 2.2: don???t forget to keep track of your breath, too!
                    <br />
                    <br />
                    Step 3: Once you finished the lineworks, slightly span your
                    pencil on the white parts of your drawing in order to create
                    some <i>*fancy*</i> sense of depth
                    <br />
                    <br />
                    Step 4: You have finished your very own Zentangle! Feel free
                    to share it with others in the discussion box below!
                    <br />
                    <br />
                  </>
                )}
              </div>
            </>
          ) : (
            <>
              <img className="frame" src={video_frame} alt="Frame" />
              <div className="photo">
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={mc_step_1}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={mc_step_2}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={mc_step_3}
                  alt="Step"
                />
                <img
                  style={{ width: "100%", height: "auto" }}
                  src={mc_step_4}
                  alt="Step"
                />
              </div>
              <div className="description">
                <div
                  style={{
                    textAlign: "left",
                    lineHeight: 1.5,
                    padding: "50px 10px",
                  }}
                >
                  {lstrings.getLanguage() === "vn" ? (
                    <>
                      Tr?????c khi b???t ?????y ng??y m???i, h??y th???c hi???n m???t b??i t???p
                      check-in tinh th???n nh??? nh??: <br />
                      <ol>
                        <li>H??t m???t h??i th???t s??u</li>
                        <li>Quan s??t s??? v???t xung quanh m??nh</li>
                        <li>
                          Nh???m m???t l???i, suy ngh?? v??? nh???ng th??? m??nh ???? quan s??t
                        </li>
                        <li>M??? m???t ra</li>
                        <li>
                          H??y t???o m???t lo???t m?? m??u cho c?? nh??n b???n, c??? th???{" "}
                        </li>
                        <ul>
                          <li>
                            M???i m??u s??? t????ng ???ng v???i m???t c???m x??c nh???t ?????nh (xanh
                            l??
                            <br />
                            cho vui, ????? cho gi???n, xanh d????ng cho bu???n, v??ng cho
                            lo
                            <br />
                            l???ng, x??m cho tr???ng tr??i, v.v.)
                          </li>
                          <li>V??? m???t h??nh th?? g?? ???? m?? b???n th??ch</li>
                          <li>
                            D??ng m?? m??u t????ng ???ng v???i c???m x??c hi???n t???i ????? t?? v??o
                            h??nh th?? v??? ?????y
                          </li>
                        </ul>
                        <li>B??i t???p n??y c?? th??? ???????c th???c hi???n h???ng ng??y</li>
                      </ol>
                      B???n s??? c???n chu???n b???: M???t cu???n s??? tay ????? s??? d???ng nh?? m???t
                      cu???n
                      <br />
                      nh???t k?? nh???m ghi l???i c???m x??c h???ng ng??y c???a m??nh; b??t m??u
                    </>
                  ) : (
                    <>
                      Before jumping right into the day, let???s do a quick mental
                      <br />
                      check-in:
                      <ol>
                        <li>Take a deep breath </li>
                        <li>Observe your surrounding</li>
                        <li>
                          Close your eyes, contemplate on what you have observed
                        </li>
                        <li>Open your eyes</li>
                        <li>Create a color coded panel for yourself</li>
                        <ul>
                          <li>
                            Each colour represents your feelings (eg: green for
                            <br />
                            happy, red for angry, blue for sad, yellow for
                            anxious,
                            <br />
                            grey for empty, etc.)
                          </li>
                          <li>Draw an object that you like</li>
                          <li>Fill it in with how you are feeling</li>
                        </ul>
                        <li>This exercise can be repeated daily</li>
                      </ol>
                      What you would need: A notebook to use as a diary to keep
                      <br />
                      track of your daily emotions; coloured pens
                    </>
                  )}
                </div>
              </div>
            </>
          )}
        </Modal>
      </div>
    </Room>
  );
}

export default Art;

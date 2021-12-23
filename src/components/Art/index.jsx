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
                    Những nghiên cứu gần đây đã phát hiện ra <i>Zentangle</i> -
                    một dạng bài tập kết hợp giữa thiền định và vẽ nguệch ngoạc.
                    Đây là một cách nhanh và hiệu quả để giảm căng thẳng, cũng
                    như lấy lại sự tập trung nhờ vào việc lặp lại sự tương đồng
                    để thực hành tỉnh thức, phương pháp này sẽ dựa trên việc chú
                    ý vào trọng tâm của hình vẽ ngay tại thời điểm đó. <br />
                    Một số điều cần lưu ý:
                    <ul>
                      <li>
                        Bạn không cần phải là một nghệ sĩ mới có thể vẽ
                        Zentangle
                      </li>
                      <li>Không tẩy xóa!</li>
                      <li>
                        Điểm nhấn ở bài tập này sẽ là tạo tự tập trung có chủ
                        đích - chỉ cần chú tâm vào mỗi đường nét bạn tạo ra trên
                        giấy
                      </li>
                      <li>Sẽ không có câu trả lời đúng hoặc sai</li>
                      <li>
                        Hãy thử tạo ra một bức ảnh có hoa văn lặp lại (như ảnh
                        minh họa bên dưới)
                      </li>
                    </ul>
                    Chuẩn bị: một cây bút mực (khuyến khích dùng bút mực inl
                    đen), một cây bút chì, một hoặc nhiều mảnh giấy 5*5 cm.
                    <br />
                    <br />
                    Bước 1: Vẽ những nét mỏng, hãy cố tưởng tượng về việc làm
                    cách nào để có thể tận dụng những khoảng trống trong tờ
                    giấy. <br />
                    <br />
                    Bước 2: Bắt đầu vẽ tờ giấy với các hình mẫu - bạn có thể bắt
                    đầu với những nét bạn thích hoặc một vài mẫu mà chúng ta có
                    ở đây - hãy nhớ là lặp lại chúng. <br />
                    <br />
                    Bước 2.2: Đừng quên tiếp tục hít thở đều đặn nhé! <br />
                    <br />
                    Bước 3: Ngay khi bạn hoàn thành những đường nét cơ bản trên
                    giấy, hãy kéo dài nét vẽ ra những phần màu trắng còn lại của
                    bức vẽ, để sáng tạo một vài thứ *sang chảnh* có chiều sâu.
                    <br />
                    <br />
                    Bước 4: Bạn đã hoàn thành một hình vẽ Zentangle cho riêng
                    bạn. Hãy tự do cảm nhận và chia sẻ nó với người khác trong
                    phần bình luận bên dưới nhé! <br />
                    <br />
                  </>
                ) : (
                  <>
                    Recent studies have found that <i>Zentangle</i> – a hybrid
                    between Zen practice and doodling, to be a quick and
                    efficient way to de-stress and regain concentration thanks
                    to its resemblance to other mindfulness meditative practice,
                    whose method is based on the act of focusing on a certain
                    subject at time.
                    <br />
                    Some rules:
                    <br />
                    <ul>
                      <li>You don’t have to be an artist!</li>
                      <li>No erasure!</li>
                      <li>
                        The goal here is to create an{" "}
                        <b>
                          <i>intentional concentration</i>
                        </b>
                        - let’s just focus on every stroke you make on the paper
                      </li>
                      <li>There’s no right or wrong answer</li>
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
                    Step 2.2: don’t forget to keep track of your breath, too!
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
                      Trước khi bắt đầy ngày mới, hãy thực hiện một bài tập
                      check-in tinh thần nhỏ nhé: <br />
                      <ol>
                        <li>Hít một hơi thật sâu</li>
                        <li>Quan sát sự vật xung quanh mình</li>
                        <li>
                          Nhắm mắt lại, suy nghĩ về những thứ mình đã quan sát
                        </li>
                        <li>Mở mắt ra</li>
                        <li>
                          Hãy tạo một loạt mã màu cho cá nhân bạn, cụ thể{" "}
                        </li>
                        <ul>
                          <li>
                            Mỗi màu sẽ tương ứng với một cảm xúc nhất định (xanh
                            lá
                            <br />
                            cho vui, đỏ cho giận, xanh dương cho buồn, vàng cho
                            lo
                            <br />
                            lắng, xám cho trống trãi, v.v.)
                          </li>
                          <li>Vẽ một hình thù gì đó mà bạn thích</li>
                          <li>
                            Dùng mã màu tương ứng với cảm xúc hiện tại để tô vào
                            hình thù vẽ đấy
                          </li>
                        </ul>
                        <li>Bài tập này có thể được thực hiện hằng ngày</li>
                      </ol>
                      Bạn sẽ cần chuẩn bị: Một cuốn sổ tay để sử dụng như một
                      cuốn
                      <br />
                      nhật kí nhằm ghi lại cảm xúc hằng ngày của mình; bút màu
                    </>
                  ) : (
                    <>
                      Before jumping right into the day, let’s do a quick mental
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

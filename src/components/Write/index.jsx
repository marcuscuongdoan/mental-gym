import "./styles.scss";
import hourglass from "assets/write/hourglass.png";
import portal from "assets/write/portal.png";

import Modal from "../Modal/Modal";
import frame from "assets/poem_frame.png";
import { useState } from "react";

import Room from "layouts/room";
import lstrings from "language";

const contents = {
  vn: [
    <>
      * Cho bản thân thời gian để viết mà không bị mất tập trung
      <ul>
        <li>
          NÊN viết ra mọi ý tưởng bạn có thể nghĩ ra về chủ đề của mình, bất kể
          "điên rồ" đến mức nào; bạn có thể đánh giá sau! (Và không ai khác sẽ
          được đọc)
        </li>
        <li>ĐỪNG lo về việc viết đúng ngữ pháp hoặc chính tả</li>
        <li>NÊN viết dưới dạng câu và đoạn văn</li>
        <li>
          HÃY GIỮ TAY BẠN CHUYỂN ĐỘNG. Nếu bạn không thể nghĩ ra bất cứ điều gì,
          chỉ cần tiếp tục lặp lại chủ đề của bạn (ví dụ: “cái bẫy bận rộn, cái
          bẫy bận rộn”) hoặc đại loại như “Tôi đang chờ ý tưởng đến và nó sẽ
          đến, tôi đang chờ ý tưởng đến và nó sẽ đến” lặp đi lặp lại cho đến khi
          nó đến. (Nó sẽ!)
        </li>
        <li>
          NÊN tiếp tục trong 15 hoặc 20 phút hoặc cho đến khi bạn cảm thấy mình
          có đủ để bắt đầu xây dựng bài báo hoặc nghiên cứu của mình.
        </li>
      </ul>
      * LƯU Ý: Nếu bạn gặp khó khăn trong một chủ đề, điều này cũng có thể giúp
      tinh chỉnh chủ đề đó. Viết trong vài phút, chọn một ý tưởng hoặc từ từ bài
      viết tự do đó và sau đó tự do viết về chủ đề mới đó trong vài phút, sau đó
      lặp lại quy trình đó một lần nữa, liên tiếp tinh chỉnh chủ đề của chúng.
    </>,
    <>
      Quá Khứ: <br />
      Hoạt động này là để nhìn lại thân với thông tin bạn có bây giờ. Bức thư
      này sẽ tập trung vào những lời khuyên mà bạn sẽ đưa ra cho quá khứ của
      mình và nói với họ về những gì đã xảy ra từ đó đến nay.
      <ul>
        <li>
          Xác định một ngày trong quá khứ - bạn có thể chọn một ngày ngay lập
          tức trước khi chuyển tiếp (ví dụ: trước khi vào đại học hoặc một sự
          thay đổi lớn trong cuộc đời)
        </li>
        <li>Viết thư cho chính bạn để được nhận vào ngày hôm đó</li>
        <li>Viết nó như một bức thư thực sự</li>
        <li>Trong thư địa chỉ câu hỏi như sau:</li>
        <ul>
          <li>Một số điều chính bạn đã học được kể từ đó là gì?</li>
          <li>Quá khứ của bạn nên tìm kiếm điều gì?</li>
          <li>
            Lời khuyên tốt nhất mà bạn có thể dành cho quá khứ của mình là gì?
          </li>
          <li>
            Bạn sẽ nói gì với bản thân để vượt qua một số thử thách mà bạn phải
            đối mặt?
          </li>
          <li>
            Bạn sẽ kể gì về những thành công của mình và cách bạn đối mặt với
            chúng?
          </li>
          <li>Loại người nào đã giúp bạn trong suốt chặng đường?</li>
          <li>Loại người nào đã khiến cuộc sống khó khăn hơn?</li>
          <li>Bạn ước mình đã dành nhiều thời gian hơn cho ai?</li>
        </ul>
        <li>
          Sau khi hoàn thành, hãy đọc lại bức thư. Nó có vẻ đúng? Bạn có muốn
          thực hiện bất kỳ thay đổi nào không?
        </li>
        <li>
          Khi bạn hài lòng với bức thư của mình, hãy tiếp tục bước tiếp theo
          ngay lập tức hoặc cất nó đi vài ngày rồi quay lại (khuyến nghị).
        </li>
        <li>
          Bây giờ hãy suy ngẫm về cuộc sống của bạn như hiện tại. Hãy tự hỏi bản
          thân những câu hỏi như sau:
        </li>
        <ul>
          <li>
            Trong số những lời khuyên bạn đã đưa ra cho quá khứ của mình, bạn
            đang làm theo bao nhiêu phần trăm lời khuyên hôm nay? Làm thế nào
            bạn có thể làm theo lời khuyên tốt hơn?
          </li>
          <li>
            Có một số người hoặc kiểu người mà bạn ước rằng bạn đã dành nhiều
            thời gian hơn hoặc ít hơn với? Làm thế nào bạn có thể thay đổi điều
            đó bây giờ?
          </li>
          <li>
            Bạn có thể rút ra điều gì khác và áp dụng tốt hơn cho cuộc sống và
            tương lai trước mắt của mình?
          </li>
        </ul>
      </ul>
      Tương Lai:
      <ul>
        <li>
          Trước khi bạn bắt đầu, hãy quyết định khi nào lá thư này sẽ được bạn
          đọc trong tương lai.
        </li>
        <li>Nói chuyện với chính mình như bạn đối với một người bạn</li>
        <li>Nhắc nhở ngắn gọn cuộc sống của bạn hiện tại như thế nào</li>
        <li>Khám phá nỗi sợ hãi của bạn</li>
        <li>Đặt ra mục tiêu và tham vọng của bạn</li>
        <li>Đưa ra lời khuyên cho bản thân</li>
        <li>Xác định giá trị và niềm tin của bạn</li>
        <ul>
          <li>Gia đình</li>
          <li>Sức khỏe</li>
          <li>Lãng mạn</li>
          <li>Những người bạn</li>
          <li>Sự nghiệp</li>
          <li>Tài chính</li>
        </ul>
        <li>Bạn hỏi bản thân</li>
        <ul>
          <li>Bạn có hạnh phúc không?</li>
          <li>Bạn có thích công việc của mình không?</li>
          <li>Bạn có hài lòng với nơi bạn sống không?</li>
          <li>Bạn thực sự đam mê điều gì?</li>
          <li>Bạn biết ơn điều gì nhất?</li>
          <li>Tôi có đang sống thật với chính mình không?</li>
          <li>
            Tôi có quan tâm đầy đủ đến sức khỏe tinh thần và thể chất của mình
            không?
          </li>
        </ul>
        <li>
          Đóng dấu và cất giữ lá thư của bạn ở nơi nào đó mà bạn sẽ không muốn
          đọc nó sớm
        </li>
      </ul>
    </>,
  ],
  en: [
    <>
      * Give yourself time to write without any distractions
      <ul>
        <li>
          DO write down every idea you can think of about your topic, no matter
          how "crazy"; you can judge later! (And no one else is going to see it)
        </li>
        <li>DON'T worry about correct grammar or spelling</li>
        <li>DO write in sentence and paragraph form;</li>
        <li>
          DO KEEP YOUR HANDS MOVING. If you can’t think of anything, just keep
          repeating your subject (e.g., “busy trap, busy trap”) or something
          like “I’m waiting for ideas to come and they will, I’m waiting for
          ideas to come and they will,” over and over until they do come. (They
          will!)
        </li>
        <li>
          DO keep going for 15 or 20 minutes or until you feel you have enough
          to start to build your paper or research on.
        </li>
      </ul>
      * NOTE: If you are stuck on a topic, this could also help to refine it.
      Write for a few minutes, choose one idea or word from that freewriting and
      then freely
    </>,
    <>
      Past: <br />
      This activity is about looking back at the person you were with the
      information you have now. This letter will focus on what advice you would
      give your past self and tell them about what has happened between then and
      now.
      <ul>
        <li>
          Identify a date in the past – you might choose one immediately before
          a transition (for example, before going to university or a big life
          change)
        </li>
        <li>Write the letter to yourself to be received on that day</li>
        <li>Write it as an actual letter</li>
        <li>In the letter address questions like the following:</li>
        <ul>
          <li>What are some of the main things you have learned since then?</li>
          <li>What should your past self look out for?</li>
          <li>What is the best advice you could give your past self?</li>
          <li>
            What would you tell yourself to get through some of the challenges
            that you faced?
          </li>
          <li>
            What would you tell yourself about your successes and the way you
            dealt with them?
          </li>
          <li>What type of people have helped you along the way?</li>
          <li>What type of people have made life harder?</li>
          <li>Who do you wish you had spent more time with?</li>
        </ul>
        <li>
          Once done, read the letter again. Does it seem right? Do you want to
          make any changes?
        </li>
        <li>
          When you are happy with your letter, continue to the next step
          immediately or put it away for a couple of days and then return to it
          (recommended).
        </li>
        <li>
          Now reflect on your life as it is currently. Ask yourself questions
          like the following:
        </li>
        <ul>
          <li>
            Of the advice you have given to your past self, how much of it are
            you following today? How could you follow the advice better?
          </li>
          <li>
            Are there some people or types of people you wish you had spent more
            or less time with? How can you change that now?
          </li>
          <li>
            What else can you take away and apply better to your life and your
            immediate future?
          </li>
        </ul>
      </ul>
      Future:
      <br />
      <li>
        Before you start, decide on when this letter will be read by you in the
        future.
      </li>
      <li>Talk to yourself like you would a friend</li>
      <li>Give a brief reminder what your life is currently like</li>
      <li>Explore your fears</li>
      <li>Set out your goals and ambitions</li>
      <li>Offer advice to yourself</li>
      <li>Define your values and beliefs</li>
      <ul>
        <li>Family</li>
        <li>Health</li>
        <li>Romance</li>
        <li>Friends</li>
        <li>Career</li>
        <li>Finance</li>
      </ul>
      <li>Ask yourself questions: </li>
      <ul>
        <li>Are you happy?</li>
        <li>Do you enjoy your job?</li>
        <li>Are you happy with where you live?</li>
        <li>What are you really passionate about?</li>
        <li>What are you most grateful for?</li>
        <li>Am I living a life that is true to myself?</li>
        <li>Am I taking enough care of my mental and physical health?</li>
      </ul>
      <li>
        Seal and store your letter somewhere that you won’t be tempted to read
        it early
      </li>
    </>,
  ],
};

function Write() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState(0);

  const openContent = (number) => {
    setShow(true);
    setContent(number);
  };

  return (
    <Room>
      <div className="room Write">
        <div className="row">
          <div className="item-container">
            <img
              className="item hourglass"
              src={hourglass}
              alt="Hourglass"
              onClick={() => openContent(0)}
            />
          </div>
          <div className="item-container">
            <img
              className="item"
              src={portal}
              alt="Portal"
              onClick={() => openContent(1)}
            />
          </div>
        </div>

        <Modal show={show} handleClose={() => setShow(false)}>
          <div className="poem">
            <div className="description">
              <img className="frame" src={frame} alt="Frame" />
              <div className="description-text">
                {lstrings.getLanguage() === "vn"
                  ? contents.vn[content]
                  : contents.en[content]}
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </Room>
  );
}

export default Write;

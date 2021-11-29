import "./styles.scss";

import stage from "../../assets/theatre/stage.png";

import chicken_head from "../../assets/theatre/body-parts/chicken/chicken_head.png";
import chicken_body from "../../assets/theatre/body-parts/chicken/chicken_body.png";
import chicken_arms from "../../assets/theatre/body-parts/chicken/chicken_arms.png";
import chicken_hands from "../../assets/theatre/body-parts/chicken/chicken_hands.png";
import chicken_legs from "../../assets/theatre/body-parts/chicken/chicken_legs.png";

import owl_head from "../../assets/theatre/body-parts/owl/owl_head.png";
import owl_body from "../../assets/theatre/body-parts/owl/owl_body.png";
import owl_arms from "../../assets/theatre/body-parts/owl/owl_arms.png";
import owl_hands from "../../assets/theatre/body-parts/owl/owl_hands.png";
import owl_legs from "../../assets/theatre/body-parts/owl/owl_legs.png";

import showered from "../../assets/theatre/shower/showered.png";
import not_showered from "../../assets/theatre/shower/not_showered.png";

import tidy_a from "../../assets/theatre/tidy/tidy_a.png";
import tidy_a1 from "../../assets/theatre/tidy/tidy_a1.png";
import tidy_b from "../../assets/theatre/tidy/tidy_b.png";
import tidy_b1 from "../../assets/theatre/tidy/tidy_b1.png";

import food from "../../assets/theatre/eat/food.png";
import no_food from "../../assets/theatre/eat/no_food.png";

import family from "../../assets/theatre/family/family.png";
import no_family from "../../assets/theatre/family/no_family.png";

import big_hands from "../../assets/theatre/body-parts/big_hands.png";
import chicken_big from "../../assets/theatre/body-parts/chicken_big.png";
import chicken_big_2 from "../../assets/theatre/body-parts/chicken_big_2.png";
import chicken_small from "../../assets/theatre/body-parts/chicken_small.png";
import chicken_small_2 from "../../assets/theatre/body-parts/chicken_small_2.png";
import coak from "../../assets/theatre/body-parts/coak.png";
import drink from "../../assets/theatre/body-parts/drink.png";
import empty from "../../assets/theatre/body-parts/empty.png";
import full from "../../assets/theatre/body-parts/full.png";
import owl_big from "../../assets/theatre/body-parts/owl_big.png";
import owl_big_2 from "../../assets/theatre/body-parts/owl_big_2.png";
import owl_small from "../../assets/theatre/body-parts/owl_small.png";
import owl_small_2 from "../../assets/theatre/body-parts/owl_small_2.png";
import small_hands from "../../assets/theatre/body-parts/small_hands.png";
import thirsty from "../../assets/theatre/body-parts/thirsty.png";
import weak from "../../assets/theatre/body-parts/weak.png";

import Room from "../../layouts/room";
import { useEffect, useState } from "react";

const steps = [
  {
    name: "Wake Up",
    buttons: ["Early", "Late"],
  },
  {
    name: "Take shower",
    buttons: ["Take", "Nooooo"],
  },
  {
    name: "Are you tidy",
    buttons: ["Tidy", "Whatever"],
  },
  {
    name: "Have some water",
    buttons: ["Drinkkkk", "Nooooo"],
  },
  {
    name: "Do you have breakfast",
    buttons: ["Eat", "Nooooo"],
  },
  {
    name: "Do you go to gym",
    buttons: ["Yesssss", "Nooooo"],
  },
  {
    name: "Will you read",
    buttons: ["Of course!", "What is book?"],
  },
  {
    name: "How about journal",
    buttons: ["Write", "Skip"],
  },
  {
    name: "Do you study",
    buttons: ["Yessss", "Not matter"],
  },
  {
    name: "Take time with family",
    buttons: ["Yessss", "Skip"],
  },
];

function Theatre() {
  const initialBody = {
    head: "",
    body: "",
    arms: "",
    hands: "",
    legs: "",
  };
  const [body, setBody] = useState(initialBody);
  const [step, setStep] = useState(0);
  const initialDecoration = {
    head: -1,
    shower: -1,
    tidy: -1,
    eat: -1,
    drink: -1,
    gym: -1,
    reading: -1,
    journal: -1,
    study: -1,
    family: -1,
  };
  const [decoration, setDeco] = useState(initialDecoration);

  useEffect(() => {
    console.log(decoration);
  }, [decoration]);

  const choose = (left) => {
    console.log(step);
    switch (step) {
      case 0: {
        wakeUp(left);
        break;
      }
      case 1: {
        shower(left);
        break;
      }
      case 2: {
        tidy(left);
        break;
      }
      case 3: {
        drinking(left);
        break;
      }
      case 4: {
        eating(left);
        break;
      }
      case 5: {
        gym(left);
        break;
      }
      case 6: {
        reading(left);
        break;
      }
      case 7: {
        journal(left);
        break;
      }
      case 8: {
        study(left);
        break;
      }
      case 9: {
        familyTime(left);
        break;
      }
      default:
        break;
    }
    setStep(step + 1);
  };

  const wakeUp = (left) => {
    const early = {
      head: chicken_head,
      body: chicken_body,
      arms: chicken_arms,
      hands: chicken_hands,
      legs: chicken_legs,
    };
    const late = {
      head: owl_head,
      body: owl_body,
      arms: owl_arms,
      hands: owl_hands,
      legs: owl_legs,
    };
    if (left) {
      setBody(early);
      setDeco({ ...decoration, head: 1 });
      return;
    }

    setBody(late);
    setDeco({ ...decoration, head: 0 });
    return;
  };

  const shower = (left) => {
    return left
      ? setDeco({ ...decoration, shower: 1 })
      : setDeco({ ...decoration, shower: 0 });
  };

  const tidy = (left) => {
    return left
      ? setDeco({ ...decoration, tidy: 1 })
      : setDeco({ ...decoration, tidy: 0 });
  };

  const drinking = (left) => {
    if (left) {
      setBody({ ...body, body: drink });
      setDeco({ ...decoration, drink: 1 });
      return;
    }

    setBody({ ...body, body: thirsty });
    setDeco({ ...decoration, drink: 0 });
    return;
  };

  const eating = (left) => {
    if (left) {
      setBody({ ...body, body: decoration.drink === 1 ? full : empty });
      setDeco({ ...decoration, eat: 1 });
      return;
    }

    setDeco({ ...decoration, eat: 0 });
    return;
  };

  const gym = (left) => {
    if (left) {
      setDeco({ ...decoration, gym: 1 });
      return;
    }

    setDeco({ ...decoration, gym: 0 });
    setBody({ ...body, arms: weak });
    return;
  };

  const reading = (left) => {
    setDeco({ ...decoration, reading: left ? 1 : 0 });
    return left
      ? setBody({
          ...body,
          head: decoration.head === 1 ? chicken_big : owl_big,
        })
      : setBody({
          ...body,
          head: decoration.head === 1 ? chicken_small : owl_small,
        });
  };

  const journal = (left) => {
    return left
      ? setBody({ ...body, hands: big_hands })
      : setBody({ ...body, hands: small_hands });
  };

  const study = (left) => {
    if (left)
      setBody({
        ...body,
        head:
          decoration.head === 1
            ? decoration.reading === 1
              ? chicken_big_2
              : chicken_small_2
            : decoration.reading === 1
            ? owl_big_2
            : owl_small_2,
      });
    return;
  };

  const familyTime = (left) => {
    return setDeco({ ...decoration, family: left ? 1 : 0 });
  };

  return (
    <Room>
      <div className="room">
        <div className="theatre">
          <img className="stage" src={stage} alt="Stage" />
          {body !== initialBody ? (
            <div className="full-body">
              {decoration.gym === 1 ? (
                <img className="part" src={coak} alt="coak" />
              ) : null}
              <img className="part" src={body.arms} alt="arms" />
              <img className="part" src={body.hands} alt="hands" />
              <img className="part" src={body.body} alt="body" />
              <img className="part" src={body.legs} alt="legs" />
              <img className="part" src={body.head} alt="head" />
            </div>
          ) : null}
          {decoration !== initialDecoration ? (
            decoration.shower !== -1 ? (
              decoration.shower ? (
                <img className="showered" src={showered} alt="showered" />
              ) : (
                <img
                  className="not_showered"
                  src={not_showered}
                  alt="not showered"
                />
              )
            ) : null
          ) : null}
          {decoration.tidy !== -1 ? (
            decoration.tidy === 1 ? (
              <img className="tidy_a" src={tidy_a} alt="Tidy" />
            ) : (
              <img className="tidy_b" src={tidy_b} alt="Tidy" />
            )
          ) : null}

          {decoration.tidy !== -1 ? (
            decoration.tidy === 1 ? (
              <img className="tidy_a1" src={tidy_a1} alt="Tidy" />
            ) : (
              <img className="tidy_b1" src={tidy_b1} alt="Tidy" />
            )
          ) : null}

          {decoration.eat !== -1 ? (
            decoration.eat === 1 ? (
              <img className="food" src={food} alt="Eat" />
            ) : (
              <img className="no_food" src={no_food} alt="Eat" />
            )
          ) : null}

          {decoration.family !== -1 ? (
            decoration.family === 1 ? (
              <img className="family" src={family} alt="Family" />
            ) : (
              <img className="family" src={no_family} alt="Family" />
            )
          ) : null}

          {step < 10 ? (
            <div className="row">
              <button className="left-btn" onClick={() => choose(true)}>
                {steps[step].buttons[0]}
              </button>
              <div className="question">{steps[step].name}?</div>
              <button className="right-btn" onClick={() => choose(false)}>
                {steps[step].buttons[1]}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </Room>
  );
}

export default Theatre;

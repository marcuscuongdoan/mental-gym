import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";
import routes from "./routes";
import lstrings from "./language";

function App() {
  const [lang, setLang] = useState({ language: "en" });

  function changeLanguage() {
    const otherLang = lstrings.getLanguage() === "en" ? "vn" : "en";
    lstrings.setLanguage(otherLang);
    setLang({ language: otherLang });
  }

  function mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  // wrap the `spring` helper to use a bouncy config
  function bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  // child matches will...
  const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
      opacity: 0,
      scale: 0.8,
    },
    // leave in a transparent, downscaled state
    atLeave: {
      opacity: bounce(0),
      scale: bounce(2),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
      opacity: bounce(1),
      scale: bounce(1),
    },
  };

  return (
    <div className="App">
      <div className="language" onClick={changeLanguage}>
        {lstrings.language} {lang.language}
      </div>
      <Router basename={process.env.PUBLIC_URL}>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
          {routes.map((route) => (
            <Route exact {...route} key={route.name}></Route>
          ))}
        </AnimatedSwitch>
      </Router>
    </div>
  );
}

export default App;

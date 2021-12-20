import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes";
import LanguageSwitcher from "layouts/languageSwitcher";

function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <LanguageSwitcher>
          {routes.map((route) => (
            <Route exact {...route} key={route.name}></Route>
          ))}
        </LanguageSwitcher>
      </Router>
    </div>
  );
}

export default App;

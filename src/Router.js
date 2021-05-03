import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import MyWorks from "./pages/MyWorks";
import App from "./App";
import MenuBar from "./components/nav/MenuBar";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/myWorks" component={MyWorks} />
      </Switch>
      <div
        style={{
          background: "rgba(255, 48, 13, 0.41)",
          height: "1120px",
        }}
      >
        big div
      </div>
    </BrowserRouter>
  );
};
export default RouterComponent;

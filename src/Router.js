import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import MyWorks from "./pages/MyWorks";
import App from "./App";
import MenuBar from "./components/nav/MenuBar";
import GrandientButton from "./components/GradButtonWithLink";
import Burger from "./components/Burger";
const RouterComponent = () => {
  return (
    <BrowserRouter>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/About" component={About} />
        <Route path="/myWorks" component={MyWorks} />
      </Switch>
      <GrandientButton style={{ width: "300px" }}>sadada</GrandientButton>
      <Burger
        onClick={() => {
          console.log("Dont Click on burger!!");
        }}
        show
      />
    </BrowserRouter>
  );
};
export default RouterComponent;

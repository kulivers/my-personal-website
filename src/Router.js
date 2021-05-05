import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import MyWorks from "./pages/MyWorks";
import App from "./App";
import MenuBar from "./components/nav";
import styled from "styled-components";

const ComponentsContainer = styled.div`
  //position: static;
  margin-top: 70px;
`;

const StyledRouter = styled(BrowserRouter)`
  position: relative;
`;

const RouterComponent = () => {
  return (
    <StyledRouter>
      <MenuBar />
      <ComponentsContainer>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/About" component={About} />
          <Route path="/myWorks" component={MyWorks} />
        </Switch>
        <div
          style={{
            marginBlock: "150px",
            background: "rgba(255, 48, 13, 0.41)",
            height: "2120px",
          }}
        >
          big div in router.js
        </div>
      </ComponentsContainer>
    </StyledRouter>
  );
};
export default RouterComponent;

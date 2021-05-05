import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/projects";
import About from "./pages/About";
import Contacts from "./pages/contacts";
import Experiments from "./pages/Experiments";
import MenuBar from "./components/nav";
import styled from "styled-components";

const ComponentsContainer = styled.div`
  //position: static;
  margin-top: 77px;
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
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Experiments} />
          <Route path="/About" component={About} />
          <Route path="/contacts" component={Experiments} />
          <Route path="/Experiments" component={Experiments} />
        </Switch>
      </ComponentsContainer>
    </StyledRouter>
  );
};
export default RouterComponent;

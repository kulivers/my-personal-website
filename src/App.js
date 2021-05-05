import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
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
    <React.Fragment>
      <MenuBar />
      <ComponentsContainer>
        <Home />
        <Projects />
        <About />
        <Contacts />
        <Experiments />
      </ComponentsContainer>
    </React.Fragment>
  );
};
export default RouterComponent;

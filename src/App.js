import React from "react";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Experiments from "./pages/Experiments";
import MenuBar from "./components/nav";
import styled from "styled-components";

const ComponentsContainer = styled.div`
  //position: static;
  //margin-top: 77px;
`;

const App = () => {
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
export default App;

import React from "react";
import styled from "styled-components";
import Logo from "./elements/Logo";
import { useState } from "react";
import GradButtonWithLink from "./elements/GradButtonWithRouterLink";
import BurgerB from "./elements/Burger";
import Experiments from "../../pages/Experiments";
export const MenuBar = () => {
  const [isOpen, toggleOpen] = useState(false);
  return (
    <MainMenu isOpen={isOpen}>
      <Logo name="Coolson" />
      <NavLinks isOpen={isOpen}>
        <GradButtonWithLink
          onClick={() => {
            toggleOpen();
          }}
          to="/projects"
        >
          projects
        </GradButtonWithLink>
        <GradButtonWithLink
          onClick={() => {
            toggleOpen();
          }}
          to="/about"
        >
          about
        </GradButtonWithLink>

        <GradButtonWithLink
          onClick={() => {
            toggleOpen();
          }}
          to="/contacts"
        >
          contacts
        </GradButtonWithLink>
        <GradButtonWithLink
          onClick={() => {
            toggleOpen();
          }}
          to="/experiments"
        >
          Experiments
        </GradButtonWithLink>
      </NavLinks>
      <BurgerB
        onClick={() => {
          toggleOpen(!isOpen);
        }}
        isOpen={isOpen}
      />
    </MainMenu>
  );
};
export default MenuBar;

const NavLinks = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  @media (max-width: 780px) {
    //screen and
    // display: ${(props) => (props.isOpen ? "flex" : "none")};
    display: flex;
    position: absolute;
    right: 0;
    height: 100vh;
    width: 100%;
    top: 0;
    background-color: #2f2b2b;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in;
  }
`;

const MainMenu = styled.nav`
  top: 0;
  position: fixed;
  background: #2f2b2b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  min-height: 8vh;
  font-family: "Poppins", sans-serif;
  // position: ${(props) => (props.isOpen ? "fixed" : "relative")};
  @media (max-width: 780px) {
    display: flex;
    justify-content: space-between;
  }
`;

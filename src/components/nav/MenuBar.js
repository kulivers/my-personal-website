import React from "react";
import styled from "styled-components";
import Logo from "./elements/Logo";
import { useState } from "react";
import GradButtonWithScrollLink from "./elements/GradButtonWithScrollLink";
import BurgerB from "./elements/Burger";

export const MenuBar = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <MainMenu isOpen={isOpen}>
      <Logo name="Coolson" />
      <NavLinks isOpen={isOpen}>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="projects"
        >
          projects
        </GradButtonWithScrollLink>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="about"
        >
          about
        </GradButtonWithScrollLink>

        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="contacts"
        >
          contacts
        </GradButtonWithScrollLink>
        <GradButtonWithScrollLink
          onClick={() => {
            toggleOpen();
          }}
          to="experiments"
        >
          Experiments
        </GradButtonWithScrollLink>
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
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    right: 0;
    height: 100vh;
    width: 100%;
    top: 0;
    background-color: #2f2b2b;
    margin-top: 0;
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s ease-in;
  }
`;

const MainMenu = styled.nav`
  z-index: 9999;
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

import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { useState } from "react";
import GradButtonWithLink from "../GradButtonWithLink";
import BurgerB from "../Burger";
const MenuBar = () => {
  const [isOpen, toggleOpen] = useState(false);

  return (
    <MainMenu>
      <Logo name="Coolson" />
      <NavLinks isOpen={isOpen}>
        <GradButtonWithLink
          onClick={() => {
            toggleOpen();
          }}
          to="/myWorks"
        >
          my works
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
          to="/projects"
        >
          projects
        </GradButtonWithLink>
        <GradButtonWithLink
          onClick={() => {
            toggleOpen();
          }}
          to="/contacts"
        >
          contacts
        </GradButtonWithLink>
      </NavLinks>
      <BurgerB
        onClick={() => {
          toggleOpen(!isOpen);
        }}
        isOpen={isOpen}
      />
      {/*<Burger*/}
      {/*  onClick={() => {*/}
      {/*    toggleOpen(!isOpen);*/}
      {/*  }}*/}
      {/*  isOpen*/}
      {/*>*/}
      {/*  <div className="line1" />*/}
      {/*  <div className="line2" />*/}
      {/*  <div className="line3" />*/}
      {/*</Burger>*/}
    </MainMenu>
  );
};
export default MenuBar;

const Burger = styled.div`
  display: none;
  margin: auto 0;
  cursor: pointer;
  z-index: 9999;
  div {
    background-color: white;
    height: 3px;
    width: 25px;
    margin: 5px;
  }
  @media screen and (max-width: 780px) {
    display: block;
  }
`;

const NavLinks = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 780px) {
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

    //transform: translateX(100%);
    transform: ${(props) =>
      props.isOpen ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.2s ease-in;
  }
`;

const MainMenu = styled.nav`
  position: relative;
  background: #2f2b2b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  min-height: 8vh;
  font-family: "Poppins", sans-serif;

  @media screen and (max-width: 780px) {
    display: flex;
    justify-content: space-between;
    ${Burger} {
      margin-right: 3vh;
    }
  }
`;

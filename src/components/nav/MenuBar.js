import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { useState } from "react";

const MenuBar = (props) => {
  const [isOpen, toggleOpen] = useState(false);
  console.log(isOpen);
  return (
    <MainMenu>
      <Logo name="Coolson" />
      <NavLinks isOpen={isOpen}>
        <Li>
          <Link to="/myWorks">my works </Link>
        </Li>
        <Li>
          <Link to="/about">about</Link>
        </Li>
        <Li>
          <Link to="/projects">projects</Link>
        </Li>
        <Li>
          <Link to="/contacts">contacts</Link>
        </Li>
      </NavLinks>
      <Burger
        onClick={() => {
          toggleOpen(!isOpen);
        }}
      >
        <div className="line1" />
        <div className="line2" />
        <div className="line3" />
      </Burger>
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
    //margin-left: 300px;
  }
`;

const NavLinks = styled.ul`
  width: 50%;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 780px) {
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    position: absolute;
    right: 0;
    height: 100vh;
    width: 100%;
    top: 0;
    background-color: #2f2b2b;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
  }
`;

const Li = styled.li`
  list-style-type: none;

  a {
    line-height: 1;
    list-style-type: none;
    display: block;
    color: white;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    letter-spacing: 1px;
    border-radius: 20px;

    &:hover {
      text-decoration: none;
      color: white;
      background: linear-gradient(
        rgba(255, 180, 27, 0.89),
        rgba(255, 48, 13, 0.89)
      );
    }
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

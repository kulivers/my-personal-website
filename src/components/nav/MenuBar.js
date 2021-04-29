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
          <Link to="/myWorks" >my works </Link>
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
    border-radius: 5px;

    &:hover {
      text-decoration: none;
      color: white;
      background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
      background-size: 600%;
      -webkit-animation: anime 3s linear infinite;
      animation: anime 3s linear infinite;
      @-webkit-keyframes anime {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
      @keyframes anime {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
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

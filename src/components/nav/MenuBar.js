import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";

const MainMenu = styled.nav`
  position: relative;
  list-style-type: none;
  padding: 0;
  background: #2f2b2b;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  //align-content: center;
  width: 100%;
  min-height: 8vh;
  font-family: "Poppins", sans-serif;
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

const Li = styled.li`
  list-style-type: none;
  a {
    //height: 10px;
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

const Burger = styled.div`
  display: none;
  margin: auto 0;
  div {
    background-color: white;
    height: 3px;
    width: 25px;
    margin: 5px;
  }
`;

const Container = styled.div`
  @media screen and (max-width: 780px) {
  ${Burger}{display: block};
  ${NavLinks}{display: none}
`;

const MenuBar = (props) => {
  return (
    <Container>
      <MainMenu>
        <Logo name="Coolson" />
        <NavLinks>
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
        <Burger>
          <div className="line1" />
          <div className="line2" />
          <div className="line3" />
        </Burger>
      </MainMenu>
    </Container>
  );
};
export default MenuBar;

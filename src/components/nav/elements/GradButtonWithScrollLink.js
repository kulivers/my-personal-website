import GradButton from "./GrandientButton";
import { Link as LinkS } from "react-scroll";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../../useWindowSizeHook";

const StyledLinkS = styled(LinkS)`
  display: contents;
`;

const ScrollButton = (props) => {
  const { onClick, to, children, ...rest } = props;
  const [isActive, setActive] = useState(false);
  const windowWidth = useWindowSize().width;
  return (
    <StyledLinkS
      to={to}
      smooth
      duration={500}
      spy={true}
      offset={windowWidth > 780 ? -80 : -70}
      exact="true"
      onSetActive={() => {
        setActive(true);
      }}
      onSetInactive={() => {
        setActive(false);
      }}
    >
      <GradButton
        {...rest}
        underline={isActive}
        onClick={(event) => {
          onClick && onClick(event);
        }}
      >
        {children}
      </GradButton>
    </StyledLinkS>
  );
};

export default ScrollButton;

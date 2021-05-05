import GradButton from "./GrandientButton";
import { Link as LinkS } from "react-scroll";

const ScrollButton = (props) => {
  const { onClick, to, children, ...rest } = props; //location, match, to,
  return (
    <GradButton
      {...rest}
      onClick={(event) => {
        onClick && onClick(event);
      }}
    >
      <LinkS to={to}>{children}</LinkS>
    </GradButton>
  );
};

//it could be like:
// const LinkButton2 = styled(LinkFromRouterDom)`
// someStyles
// `

export default ScrollButton;

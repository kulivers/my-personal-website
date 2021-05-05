import GradButton from "./GrandientButton";

import { withRouter } from "react-router";
const LinkButton = (props) => {
  const { history, onClick, to, children, ...rest } = props; //location, match, to,
  return (
    <GradButton
      {...rest}
      onClick={(event) => {
        onClick && onClick(event);
        history.push(to);
      }}
    >
      {children}
    </GradButton>
  );
};

//it could be like:
// const LinkButton2 = styled(LinkFromRouterDom)`
// someStyles
// `

export default withRouter(LinkButton);

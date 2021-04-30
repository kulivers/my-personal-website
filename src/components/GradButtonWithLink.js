import GradButton from "./GrandientButton";

import { withRouter } from "react-router";

const LinkButton = (props) => {
  const { history, location, match, to, onClick, children, ...rest } = props;
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

export default withRouter(LinkButton);

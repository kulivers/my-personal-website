import logo, {
  ReactComponent as BikeLogo,
} from "../undraw_Ride_a_bicycle_2yok 12.svg";
import "./Logo.css";
import { useHistory } from "react-router-dom";

const Logo = ({ name }) => {
  const history = useHistory();
  return (
    <div
      className="logo-container"
      onClick={() => {
        history.push("/");
      }}
    >
      <BikeLogo className="bike-logo" />
      <span className="logo-header">{name}</span>

      {/*{name.split("").map((char, index) => {*/}
      {/*  return (*/}
      {/*    <span className="logo-header" key={index}>*/}
      {/*      {char}*/}
      {/*    </span>*/}
      {/*  );*/}
      {/*})}*/}
    </div>
  );
};
export default Logo;

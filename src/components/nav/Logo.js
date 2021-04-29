import logo, {
  ReactComponent as BikeLogo,
} from "./undraw_Ride_a_bicycle_2yok 12.svg";
import "./Logo.css";

const Logo = ({ name }) => {
  return (
    <div className="logo-container">
      <BikeLogo className="bike-logo" />
      <span className="logo-header">{name}</span>
    </div>
  );
};
export default Logo;

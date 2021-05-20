import styled from "styled-components";

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  display: block;
  color: white;
  width: 100%;
  text-align: center;
  padding: 16px;
  letter-spacing: 1px;
  border-radius: 5px;
  line-height: 1;
  font-size: medium;
  background-color: transparent;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  text-decoration: ${(props) => (props.underline ? "underline" : "none")};
  text-decoration-color: #ea215a;
  text-decoration-thickness: 0.125em;
  text-underline-offset: 1.5px;

  &:hover {
    text-decoration: none;
    color: white;
    background: linear-gradient(-45deg, #ffa63d, #ff3d77, #338aff, #3cf0c5);
    background-size: 600%;
    -webkit-animation: anime 3s linear infinite;
    animation: anime 3s linear infinite;
    @-webkit-keyframes anime {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    @keyframes anime {
      0% {
        background-position: 0 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
  }
`;
const GradientButton = ({ children, underline, ...props }) => {
  // console.clear();
  // console.log({ children }, ": ", underline);
  return (
    <Button underline={underline} {...props}>
      {children}
    </Button>
  );
};
export default GradientButton;

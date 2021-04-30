import styled from "styled-components";

const GradientButton = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

const Button = styled.button`
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  letter-spacing: 1px;
  border-radius: 5px;
  line-height: 1;
  background-color: transparent;
  font-family: "Poppins", sans-serif;
  text-transform: uppercase;
  //border: rgba(255, 247, 251, 0.05) 1px solid;
  border: 0;

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
export default GradientButton;

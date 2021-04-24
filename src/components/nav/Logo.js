import styled from "styled-components";

const Text = styled.header`
  //background-color: rgba(255, 244, 244, 0.3);
  color: aliceblue;
  font-weight: 700;
  text-decoration: none;
  font-size: 2rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 10% auto;
`;

const Container = styled.div`
  //background-color: rgba(255, 0, 0, 0.3);
  //margin-left: 40px;
`;

const Logo = ({ name }) => {
  return (
    <Container>
      <Text>{name}</Text>
    </Container>
  );
};
export default Logo;

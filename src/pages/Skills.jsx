import styled from "styled-components";
import ProgressBarWithViewport from "../components/ProgressBarWithViewport";
const Container = styled.section`
  position: relative;
  font-family: "Poppins", sans-serif;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(17, 19, 42);
  padding: 9rem 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  //background-color: rgba(255, 0, 221, 0.2);
  min-width: 40%;
  min-height: 500px;
`;

const LoadingBlock = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  //background-color: rgba(255, 0, 0, 0.29);
`;

const CardsContainer = styled.div`
  bottom: 0;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute; // when it doesnt contain text
  height: 50%;
  width: 100%;
  padding: 20px 10px 20px 10px;
  border: rgb(17, 19, 42) 1px solid;
  border-radius: 20px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.3),
    5px 5px 5px rgba(0, 0, 0, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.2);
`;

const Card = styled.div`
  background-color: ${(p) => p.color};
  width: 90%;
  height: 80%;
  padding: 5px;
  color: white;
  text-align: center;
  overflow: hidden;
  margin: 5px;
  border: rgb(17, 19, 42) 1px solid;
  border-radius: 5px;
  box-shadow: inset 0 0 60px 155px ${(p) => p.color};
\`      ;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: 900px) {
    width: 80%;
  }
`;
const InfoBlock = styled.div`
  background-color: #3cf0c5;
  height: 100%;
  border-radius: 20px;
  padding: 15px;
`;

const SkillsText = styled.span`
  font-family: "Padauk";
`;

const P = styled.p`
  color: white;
  padding: 0 0 0 15px;
`;

const H1 = styled.h1`
  color: whitesmoke;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <LeftContainer>
        <P>Skills & expiriense</P>
        <InfoBlock>
          Since beginning my journey as a freelance developer nearly 10 years
          ago, I’ve done remote work for agencies, consulted for startups, and
          collaborated with talented people to create web products for both
          business and consumer use.
          <br /> <br /> I create successful responsive websites that are fast,
          easy to use, and built with best practices. The main area of my
          expertise is front-end development, HTML, CSS, JS, building small and
          medium web apps, custom plugins, features, animations, and coding
          interactive layouts.
          <br /> <br /> I also have full-stack developer experience with popular
          open-source CMS like (WordPress, Drupal, Magento, Keystone.js and
          others).
          <br />
          <br /> Visit my LinkedIn profile for more details or just contact me.
        </InfoBlock>
      </LeftContainer>
      <RightContainer>
        <LoadingBlock>
          <H1>React</H1>
          <ProgressBarWithViewport percent={70} color="#00ffff" />
          <H1>dotnet</H1>
          <ProgressBarWithViewport percent={10} color="#C400BBFF" />
          <H1>T-SQL</H1>
          <ProgressBarWithViewport percent={50} color="yellow" />
        </LoadingBlock>
        <CardsContainer>
          <Card color="rgba(0,255,255,0.22)">
            <header>React</header>
            <SkillsText>
              some text sandak ndaks nkdnak dsakn dkandk adakna
            </SkillsText>
          </Card>
          <Card color="rgba(255,0,244,0.22)">
            <header>.NET</header>
            <SkillsText>
              some text sandak ndaks nkext sandak ndaks nkdnak dsakn dkandk
              adakna
            </SkillsText>
          </Card>
          <Card color="rgba(217,255,0,0.22)">
            <header> T-SQL</header>
            <SkillsText>some text sandak ndaks nkdnak dsakn</SkillsText>
          </Card>
        </CardsContainer>
      </RightContainer>
    </Container>
  );
};

export default Skills;

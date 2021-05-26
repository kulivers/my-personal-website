import styled from "styled-components";
import { Component } from "react";
import ProgressBar from "../components/ProgressBar";

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
`;
const InfoBlock = styled.div`
  background-color: #3cf0c5;
  height: 100%;
  border-radius: 20px;
  padding: 15px;
`;

const P = styled.p`
  color: white;
  padding: 0 0 0 15px;
`;

const H1 = styled.h1`
  color: whitesmoke;
`;

class Skills extends Component {
  // const [showSkillsAnimation, setShow] = useState(false);
  render() {
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
            expertise is front-end development, HTML, CSS, JS, building small
            and medium web apps, custom plugins, features, animations, and
            coding interactive layouts.
            <br /> <br /> I also have full-stack developer experience with
            popular open-source CMS like (WordPress, Drupal, Magento,
            Keystone.js and others).
            <br />
            <br /> Visit my LinkedIn profile for more details or just contact
            me.
          </InfoBlock>
        </LeftContainer>
        <RightContainer>
          <LoadingBlock>
            <H1>React</H1>
            <ProgressBar percent={70} color="#00ffff" />
            <H1>dotnet</H1>
            <ProgressBar percent={10} color="#C400BBFF" />
            <H1>T-SQL</H1>
            <ProgressBar percent={50} color="yellow" />
          </LoadingBlock>
          <CardsContainer>
            <Card color="rgba(0,255,255,0.22)">
              <header>React</header>
              <span style={{ fontSize: "0.9rem", fontFamily: "serif" }}>
                some text sandak ndaks nkdnak dsakn dkandk adakna
              </span>
            </Card>
            <Card color="rgba(255,0,244,0.22)">
              <header>.NET</header>
              <span style={{ fontSize: "1rem", fontFamily: "serif" }}>
                some text sandak ndaks nkdnak dsakn dkandksome text sandak ndaks
                nkdnak dsakn dkandksome text sandak ndaks nkdnak dsakn dkandk
                adakna
              </span>
            </Card>
            <Card color="rgba(217,255,0,0.22)">
              <header> T-SQL</header>
              <span style={{ fontSize: "0.9rem", fontFamily: "serif" }}>
                some text sandak ndaks nkdnak dsakn
              </span>
            </Card>
          </CardsContainer>
        </RightContainer>
      </Container>
    );
  }
}

class SkillsPercentages extends Component {
  state = { react: 0, dotnet: 0, tsql: 0 };
  setXPercent(x, skillName = "react") {
    // console.log(this.state[skillName]);
    if (this.state[skillName] < x) {
      this.setState((prevState) => ({
        ...prevState,
        [skillName]: prevState[skillName] + 1,
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  startPercentCounters() {
    this.reactInterval = setInterval(() => this.setXPercent(50, "react"), 10);
    this.dotnetInterval = setInterval(() => this.setXPercent(10, "dotnet"), 10);
    this.tsqlInterval = setInterval(() => this.setXPercent(40, "tsql"), 10);
  }
  componentDidMount() {
    this.startPercentCounters();
  }

  componentWillUnmount() {
    clearInterval(this.reactInterval);
    clearInterval(this.dotnetInterval);
    clearInterval(this.tsqlInterval);
  }

  render() {
    return (
      <Container id="skills">
        react: {this.state.react}
        dotNet: {this.state.dotnet}
        t-sql: {this.state.tsql}
      </Container>
    );
  }
}

export default Skills;

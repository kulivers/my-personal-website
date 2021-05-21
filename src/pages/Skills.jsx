import styled from "styled-components";
import { Component } from "react";
import ProgressBar from "../components/ProgressBar";

const Container = styled.section`
  position: relative;
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
  //background-color: rgba(255, 0, 0, 0.29);
`;

const CardsContainer = styled.div`
  bottom: 0;
  background-color: yellow;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  height: 50%;
  width: 100%;
  padding: 10px;
`;

const Card = styled.div`
  height: 100%;
  width: 30%;
  background-color: white;
`;

const LeftContainer = styled.div`
  width: 30%;
  height: 100%;
`;
const InfoBlock = styled.div`
  background-color: #3cf0c5;
  height: 100%;
`;

const P = styled.p`
  color: white;
`;

const H1 = styled.h1`
  color: whitesmoke;
`;

class Skills extends Component {
  // const { reactVal, dotnetVal, tsqlVal } = this.props
  reactV = 40;
  dotV = 10;
  tsqlV = 110;
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
          <CardsContainer></CardsContainer>
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

import styled from "styled-components";
import { Component } from "react";

const Container = styled.section`
  height: 1500px;
  background-color: rgba(106, 255, 0, 0.41);
`;

class Skills extends Component {
  state = { percent: 0 };

  setXPercent(x, skillName) {
    console.log(this.state[skillName]);
    if (this.state.percent < x) {
      this.setState((prevState) => ({
        percent: prevState.percent + 1,
      }));
    } else {
      clearInterval(this.interval);
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.setXPercent(50, "percent"), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <Container id="skills">Skills: {this.state.percent}</Container>;
  }
}

export default Skills;

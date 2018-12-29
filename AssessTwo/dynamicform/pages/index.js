import React, { Component } from "react";
import Head from "../components/head";
import Room1 from "../components/room1";
import Room2 from "../components/room2";
import Room3 from "../components/room3";
import Room4 from "../components/room4";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      secondRoomCheck: false,
      thirdRoomCheck: false,
      fourthRoomCheck: false,
      numberVals: {
        adult1: 1,
        child1: 0,
        adult2: 1,
        child2: 0,
        adult3: 1,
        child3: 0,
        adult4: 1,
        child4: 0
      }
    };

    this.handleRoom2Check = this.handleRoom2Check.bind(this);
    this.handleRoom3Check = this.handleRoom3Check.bind(this);
    this.handleRoom4Check = this.handleRoom4Check.bind(this);
    this.handleSavedNums = this.handleSavedNums.bind(this);
  }

  handleRoom2Check() {
    if (this.state.secondRoomCheck === false) {
      this.setState({ secondRoomCheck: true });
    } else {
      this.setState(prevState => ({
        secondRoomCheck: false,
        thirdRoomCheck: false,
        fourthRoomCheck: false,
        numberVals: {
          ...prevState.numberVals,
          adult2: 1,
          child2: 0,
          adult3: 1,
          child3: 0,
          adult4: 1,
          child4: 0
        }
      }));
    }
  }

  handleRoom3Check() {
    if (this.state.thirdRoomCheck === false) {
      this.setState({
        secondRoomCheck: true,
        thirdRoomCheck: true
      });
    } else {
      this.setState(prevState => ({
        thirdRoomCheck: false,
        fourthRoomCheck: false,
        numberVals: {
          ...prevState.numberVals,
          adult3: 1,
          child3: 0,
          adult4: 1,
          child4: 0
        }
      }));
    }
  }

  handleRoom4Check() {
    if (this.state.fourthRoomCheck === false) {
      this.setState({
        secondRoomCheck: true,
        thirdRoomCheck: true,
        fourthRoomCheck: true
      });
    } else {
      this.setState(prevState => ({
        fourthRoomCheck: false,
        numberVals: {
          ...prevState.numberVals,
          adult4: 1,
          child4: 0
        }
      }));
    }
  }

  handleSavedNums(e, i) {
    let tempState = Object.assign({}, this.state);
    tempState.numberVals[e] = Number(i);
    this.setState(tempState);
  }

  render() {
    return (
      <div>
        <div className="super-flex">
          <Head title="Assessment Two" />
          <Room1 nums={this.handleSavedNums} />
          <Room2
            check={this.state.secondRoomCheck}
            handleRoom2Check={this.handleRoom2Check}
            nums={this.handleSavedNums}
          />
          <Room3
            check={this.state.thirdRoomCheck}
            handleRoom3Check={this.handleRoom3Check}
            nums={this.handleSavedNums}
          />
          <Room4
            check={this.state.fourthRoomCheck}
            handleRoom4Check={this.handleRoom4Check}
            nums={this.handleSavedNums}
          />
        </div>
        <button
          onClick={() => {
            console.log(this.state);
          }}
        >
          Submit
        </button>
        <style jsx>{`
          .super-flex {
            margin: 50px;
            display: flex;
          }
        `}</style>
      </div>
    );
  }
}

export default Home;

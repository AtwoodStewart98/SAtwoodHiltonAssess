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
      fourthRoomCheck: false
    };

    this.handleRoom2Check = this.handleRoom2Check.bind(this);
    this.handleRoom3Check = this.handleRoom3Check.bind(this);
    this.handleRoom4Check = this.handleRoom4Check.bind(this);
  }

  handleRoom2Check() {
    if (this.state.secondRoomCheck === false) {
      this.setState({ secondRoomCheck: true });
    } else {
      this.setState({
        secondRoomCheck: false,
        thirdRoomCheck: false,
        fourthRoomCheck: false
      });
    }
  }

  handleRoom3Check() {
    if (this.state.thirdRoomCheck === false) {
      this.setState({
        secondRoomCheck: true,
        thirdRoomCheck: true
      });
    } else {
      this.setState({
        thirdRoomCheck: false,
        fourthRoomCheck: false
      });
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
      this.setState({
        fourthRoomCheck: false
      });
    }
  }

  render() {
    return (
      <div>
        <div className="super-flex">
          <Head title="Assessment Two" />
          <Room1 />
          <Room2
            check={this.state.secondRoomCheck}
            handleRoom2Check={this.handleRoom2Check}
          />
          <Room3
            check={this.state.thirdRoomCheck}
            handleRoom3Check={this.handleRoom3Check}
          />
          <Room4
            check={this.state.fourthRoomCheck}
            handleRoom4Check={this.handleRoom4Check}
          />
        </div>
        <button>Submit</button>
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

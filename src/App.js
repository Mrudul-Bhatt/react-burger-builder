import React, { Component } from "react";
import classes from "./App.module.css";
import Person from "../components/Persons/Person/Person";
//import Radium from "radium";

class App extends Component {
  state = {
    person: [
      { name: "m1", age: 1 },
      { name: "m2", age: 2 },
      { name: "m3", age: 3 },
    ],
    show: false,
    changeNameVal: false,
  };

  changeShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };
  showNameChange = () => {
    this.setState({
      changeNameVal: !this.state.changeNameVal,
    });
  };

  changeName = (e) => {
    this.setState({
      person: [
        { name: e.target.value, age: 1 },
        { name: "m2", age: 2 },
        { name: "m3", age: 3 },
      ],
    });
  };

  render() {
    return (
      <div className={classes.App}>
        <h1>Hello</h1>
        <button onClick={this.changeShow}>Show Values</button>
        {this.state.show ? (
          <div>
            <Person
              changeNameVal={this.showNameChange}
              changeName={this.changeName}
              changeNameValState={this.state.changeNameVal}
              name={this.state.person[0].name}
            >
              children1
            </Person>
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;

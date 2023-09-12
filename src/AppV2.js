import React from "react";

export default class AppV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      loading: false,
    };
    // this.decrement = this.decrement.bind(this);
  }

  componentDidMount() {
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setUsers(res.results);
    //     // console.log(res.results);
    //   });
    console.log(
      "Component is mounting"
    );
  }

  componentDidUpdate() {
    console.log("Component is updated");
  }

  componentWillUnmount() {
    console.log(
      "Component is unmounting"
    );
  }

  increment = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter + 1,
      };
    });
  };

  decrement = () => {
    this.setState((prev) => {
      return {
        counter: prev.counter - 1,
      };
    });
  };

  render() {
    return (
      <>
        <div>
          Counter: {this.state.counter}
        </div>
        <button
          onClick={this.increment}
        >
          Increment
        </button>
        <button
          onClick={this.decrement}
        >
          Decrement
        </button>
      </>
    );
  }
}

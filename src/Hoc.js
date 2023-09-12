import React, { Component } from "react";

export default function Hoc(WrapperComponent) {
  return class extends Component {
    render() {
      return (
        <div>
          <WrapperComponent></WrapperComponent>
        </div>
      );
    }
  };
}

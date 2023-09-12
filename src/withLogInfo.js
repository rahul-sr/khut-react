import React from "react";

export default function withLogInfo(
  Component
) {
  class WrapperComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      console.log(this.state);
    }

    componentDidUpdate(
      prevState,
      prevProps
    ) {
      console.log(prevState, prevProps);
    }

    render() {
      return (
        <>
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <Component
              {...this.props}
            />
          )}
        </>
      );
    }
  }

  return WrapperComponent;
}

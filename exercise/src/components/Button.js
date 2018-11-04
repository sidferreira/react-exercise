import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button style={{ ...styles.button, ...this.props.style }}>
        {this.props.children}
      </button>
    );
  }
}

const styles = {
  button: {
    width: 100,
    margin: 8,
    padding: 8
  }
};

import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default class TopBar extends Component {
  state: { loggedIn: false };

  render() {
    return (
      <header style={styles.header}>
        <div style={styles.logo}>
          <Link to="/">
            <img alt="logo" style={styles.favicon} src="favicon-196x196.png" />
          </Link>
        </div>
        <div>Modus Create</div>
        <div style={styles.spacer} />
        <div style={styles.buttons}>
          <Button style={styles.buttonLogin}>Login</Button>
          <Button style={styles.buttonSignup}>Signup</Button>
        </div>
      </header>
    );
  }
}

const styles = {
  header: {
    height: 48,
    width: "100%",
    backgroundColor: "rgb(102,63,180)",
    color: "white",
    padding: "6px 10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  favicon: { maxHeight: 40, flex: 1 },
  logo: {
    float: "left",
    margin: 8
  },
  spacer: { float: "left", color: "white", flex: 1 },
  buttons: { float: "right", paddingRight: 20 },
  buttonLogin: { backgroundColor: "red", color: "white" },
  buttonSignup: { backgroundColor: "blue", color: "white" }
};

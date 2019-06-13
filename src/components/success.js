import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Success
            </Typography>
          </Toolbar>
        </AppBar>

        <br />
        <br />
        <div>
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </div>
      </div>
    );
  }
}

export default Success;

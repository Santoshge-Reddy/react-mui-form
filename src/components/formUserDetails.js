import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    if (
      this.props.values.firstName !== "" &&
      this.props.values.lastName !== "" &&
      this.props.values.email !== ""
    ) {
      this.props.nextStep();
    }
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>

        <TextField
          required="true"
          helperText="Enter your First Name"
          label="First Name"
          defaultValue={values.firstName}
          onChange={handleChange("firstName")}
        />
        <br />
        <TextField
          required="true"
          helperText="Enter your Last Name"
          label="Last Name"
          defaultValue={values.lastName}
          onChange={handleChange("lastName")}
        />
        <br />

        <TextField
          required="true"
          helperText="Enter your Email"
          label="Email"
          defaultValue={values.email}
          onChange={handleChange("email")}
        />
        <br />
        <br />
        <Button variant="contained" onClick={this.continue} color="primary">
          Continue
        </Button>
      </div>
    );
  }
}

export default FormUserDetails;

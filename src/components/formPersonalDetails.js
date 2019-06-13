import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    if (
      this.props.values.firstName !== "" &&
      this.props.values.lastName !== "" &&
      this.props.values.email !== "" &&
      this.props.values.occupation !== "" &&
      this.props.values.city !== "" &&
      this.props.values.bio !== ""
    ) {
      this.props.nextStep();
    }
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
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
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>

        <TextField
          helperText="Enter your Occupation"
          label="Occupation"
          defaultValue={values.occupation}
          onChange={handleChange("occupation")}
        />
        <br />
        <TextField
          helperText="Enter your City"
          label="City"
          defaultValue={values.city}
          onChange={handleChange("city")}
        />
        <br />

        <TextField
          helperText="Enter your Bio"
          label="Bio"
          defaultValue={values.bio}
          onChange={handleChange("bio")}
        />
        <br />
        <br />
        <Button variant="contained" onClick={this.previous} color="default">
          Back
        </Button>

        <Button variant="contained" onClick={this.continue} color="primary">
          Continue
        </Button>
      </div>
    );
  }
}

export default FormPersonalDetails;

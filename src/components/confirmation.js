import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export class Confirmation extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Confirmation
            </Typography>
          </Toolbar>
        </AppBar>

        <List>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" secondary={occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" secondary={city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" secondary={bio} />
          </ListItem>
        </List>

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

export default Confirmation;

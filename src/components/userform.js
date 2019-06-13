import React, { Component } from "react";
import FormUserDetails from "./formUserDetails";
import FormPersonalDetails from "./formPersonalDetails";
import Confirmation from "./confirmation";
import Success from "./success";

export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 3:
        return (
          <Confirmation
            nextStep={this.nextStep}
            values={values}
            prevStep={this.prevStep}
          />
        );
      case 4:
        return <Success />;
      default:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
    }
  }
}

export default UserForm;

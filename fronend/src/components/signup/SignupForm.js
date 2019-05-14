import React from "react";
import toastr from "toastr";
import AuthService from "../../../services/auth";

const service = new AuthService();

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        service
          .signup(values)
          .then(response => {
            console.log(response);
            toastr.success("User Created");
          })
          .catch(err => {
            console.log(err);
            toastr.error("Something went wrong");
          });
      }
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form
    return ()
  }
}

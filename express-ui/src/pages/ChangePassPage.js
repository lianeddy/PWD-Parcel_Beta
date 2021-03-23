import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Input, Label } from "reactstrap";
import { changePassAction } from "../redux/actions";

class ChangePassPage extends Component {
  state = {
    password: "",
    confirmPassword: "",
  };

  onChangeInput = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  onClickChange = () => {
    const { changePassAction } = this.props;
    const { password } = this.state;
    const token = new URLSearchParams(this.props.location.search).get("token");
    changePassAction({ password, token });
  };

  render() {
    const { password, confirmPassword } = this.state;
    return (
      <div className="container"
      style={{height:"250px", 
      width:"500px", 
      paddingTop:"20px", 
      paddingLeft:"20px" ,
      borderStyle: "solid", 
      borderColor: "pink", 
      borderRadius: 25, 
      marginTop: 25}}>
        <div>
          <Label for="new-password">New password</Label>
          <Input 
          onChange={this.onChangeInput} 
          id="password" 
          type="password" 
          />
        </div>
        <div>
          <Label for="verify-password">Verify Password</Label>
          <Input
            onChange={this.onChangeInput}
            id="confirmPassword"
            type="password"
          />
        </div>
        <div>
          <br />
        </div>
        <div>
          <Button color="danger" size="sm"
            onClick={
              password && confirmPassword
                ? this.onClickChange
                : () => alert("Password invalid")
            } 
          >
            Confirm
          </Button>
        </div>
      </div>
    );
  }
}

export default connect(null, { changePassAction })(ChangePassPage);
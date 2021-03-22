import React, { Component } from "react";
import { Input, Spinner, Button, Label } from "reactstrap";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions";
import { Link, Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  onChangeInput = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  render() {
    const { loading, email, loginAction } = this.props;
    if (email) {
      return <Redirect to="/" />;
    }
    return (
      <div
        className="container"
        style={{
          height: "350px",
          width: "500px",
          paddingTop: "20px",
          paddingLeft: "20px",
          borderStyle: "solid",
          borderColor: "pink",
          borderRadius: 25,
          marginTop: 25,
        }}
      >
        <Label for="email">Email</Label>
        <div>
          <Input
            placeholder="Email"
            type="text"
            id="email"
            onChange={this.onChangeInput}
          />
        </div>
        <Label for="password">Password</Label>
        <div>
          <Input
            placeholder="Password"
            type="password"
            id="password"
            onChange={this.onChangeInput}
          />
        </div>
        <div>
          <br />
        </div>
        <div className="my-2" style={{ marginLeft: "180px" }}>
          <Button
            color="primary"
            onClick={() => loginAction(this.state)}
            disabled={loading}
          >
            {loading ? <Spinner /> : "Login"}
          </Button>
        </div>
        <div style={{ marginLeft: "155px" }}>
          <Link to="/forgetpage">Forget password?</Link>
        </div>
        <div>
          <br />
        </div>
        <div style={{ marginLeft: "160px" }}>
          <Link to="/loginadmin">
            <Button size="sm" outline color="secondary">
              Login as admin
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ user }) => {
  return {
    email: user.email,
    loading: user.loading,
  };
};

export default connect(mapStatetoProps, { loginAction })(LoginPage);

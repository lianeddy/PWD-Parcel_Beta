import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from "reactstrap";
import { logoutAction } from "../redux/actions";
import logo from "../logo/cover.png";
import HomeIcon from "@material-ui/icons/Home";
import CartIcon from "@material-ui/icons/ShoppingCart";
import FoodIcon from "@material-ui/icons/Fastfood";
import Receipt from "@material-ui/icons/Receipt";

class NavigationBar extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <Navbar style={{ backgroundColor: "#FAEAF0" }} light expand="md">
          <NavbarBrand>
            {" "}
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ width: "30 px", height: "70px" }}
              />{" "}
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavLink href="/">
                <HomeIcon />
              </NavLink>
              <NavItem>
                <NavLink href="/cartpage">
                  <CartIcon />
                </NavLink>
              </NavItem>
              <NavLink href="/products">
                <FoodIcon />
              </NavLink>
              {this.props.email !== "" ? (
              <NavLink href="/transaction">
                <Receipt />
                Transaction
              </NavLink>
              ): null}
            </Nav>
            {this.props.email !== "" ? (
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  Halo {email.split("@")[0]}
                </DropdownToggle>
                <DropdownMenu left>
                  <Link to="/">
                    <DropdownItem onClick={this.props.logoutAction}>
                      Log Out
                    </DropdownItem>
                  </Link>
                  <Link to="/loginadmin">
                    <DropdownItem>as Admin</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : (
              <UncontrolledDropdown>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/login">
                    <DropdownItem>Login</DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem>Register</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            )}

            {this.props.email ? (
              <NavbarText>{this.props.email}</NavbarText>
            ) : null}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStatetoProps = ({ user }) => {
  return {
    email: user.email,
  };
};

export default connect(mapStatetoProps, { logoutAction })(NavigationBar);

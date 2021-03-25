import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
  import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    // NavbarText,
    NavbarToggler,
    // NavItem,
    // NavLink,
    UncontrolledDropdown,
  } from "reactstrap";
  import { logoutAction } from "../redux/actions";

  
import logo from "../logo/logoparcel.png"

class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    const {email} = this.props
    return (
      <div>
        <Navbar  light expand="md" style={{backgroundColor:"#FAEAF0"}}>
          <NavbarBrand href="/"> <Link to="/"><img src={logo} alt="logo" style={{width:"30 px", height:"70px" }} /> </Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* <NavItem>
                <NavLink href="/">Home</NavLink>  
              </NavItem> */}
              
              
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Categories
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Chocolate</DropdownItem>
                  <DropdownItem>Syrup</DropdownItem>
                  <DropdownItem>Biscuit</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>

{this.props.email !== '' ? (
            <UncontrolledDropdown>
              <DropdownToggle nav caret>Halo {email.split("@")[0]}</DropdownToggle>
              <DropdownMenu left>
                <Link to="/">
                  <DropdownItem onClick={this.props.logoutAction}>
                    Log Out
                    </DropdownItem>
                </Link>
                <Link to="/loginadmin">
                  <DropdownItem>
                    as Admin
                    </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            ) : (
            <UncontrolledDropdown>
              <DropdownToggle nav caret>User</DropdownToggle>
              <DropdownMenu right>
                <Link to="/login">
                  <DropdownItem>
                    Login
                  </DropdownItem>
                </Link>
              <Link to="/register" >
                  <DropdownItem>
                 Register
                 </DropdownItem>
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>)}

          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({user : {email}}) => {
  return {
    email,
  }
}

export default connect (mapStateToProps, {logoutAction})(Header)


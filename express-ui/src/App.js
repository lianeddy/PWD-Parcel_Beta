import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  ForgetPage,
  LoginPage,
  LandingPage,
  RegisterPage,
  VerifyPage,
  CartPage,
  ProductDetail,
  ChangePassPage,
  LoginAdminPage,
} from "./pages";
import { keepLoginAction } from "./redux/actions";
import Header from "./component/Header";
// import ChangePassPage from './pages/ChangePassPage';
// import { loginAction } from './redux/actions'

class App extends Component {
  state = {};
  componentDidMount() {
    const { keepLoginAction } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      keepLoginAction();
    }
  }

  render() {
    return (
      <div>
        <Header />
        {/* <Route path='/cartpage' component={CartPage} /> */}
        <Route path="/forgetpage" component={ForgetPage} />
        {/* <Route path='/change-password' component={ChangePassPage} /> */}
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/verify" component={VerifyPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/product-detail" component={ProductDetail} />
        <Route path="/forgetpage" component={ForgetPage} />
        <Route path="/change-password" component={ChangePassPage} />
        <Route path="/loginadmin" component={LoginAdminPage} />
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     userId: state.user.id,
//   }
// }

export default connect(null, { keepLoginAction })(App);

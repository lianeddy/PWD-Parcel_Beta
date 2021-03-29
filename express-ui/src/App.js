import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import {
  ForgetPage,
  LoginPage,
  RegisterPage,
  VerifyPage,
  CartPagee,
  ProductDetail,
  ChangePassPage,
  LoginAdminPage,
  StatusOrder,
  UserTransaction,
  // GraphicPage,
  AdminDashBoard,
  ProductPage,
  JumbotronPage,
} from "./pages";
import { keepLoginAction } from "./redux/actions";
// import ChangePassPage from './pages/ChangePassPage';
// import { loginAction } from './redux/actions'
import { FooterPage, Header } from "./components";
// import { loginAction } from "./redux/action";

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
        <Route path="/" exact component={JumbotronPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/verify" component={VerifyPage} />
        <Route path="/product-detail" component={ProductDetail} />
        <Route path="/loginadmin" component={LoginAdminPage} />
        <Route path="/transaction" component={UserTransaction} />
        <Route path="/status" component={StatusOrder} />
        <Route path="/cartpage" component={CartPagee} />
        <Route path="/change-password" component={ChangePassPage} />
        <Route path="/admindashboard" component={AdminDashBoard} />
        <Route path="/products" component={ProductPage} />
        <FooterPage />
      </div>
    );
  }
}

export default connect(null, { keepLoginAction  })(App);

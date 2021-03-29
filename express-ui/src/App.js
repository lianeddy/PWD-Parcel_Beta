import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { FooterPage, Header} from "./components";
import { ProductPage, JumbotronPage } from "./pages";
import { keepLoginAction } from "./redux/actions";
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
        <div className= "row"></div>
        <Header />
        <Route path="/" exact component={JumbotronPage}/>
        <Route path="/products" component={ProductPage} />
        <FooterPage />
      </div>
    );
  }
}

export default connect(null, { keepLoginAction })(App);
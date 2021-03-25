import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {
  LoginPage,
  ForgetPage,
  CartPagee,
  ChangePassPage,
  LoginAdminPage,
  // GraphicPage,
  // AdminDashBoard, 
} from './pages'
import {keepLoginAction} from './redux/actions'
import Header from './component/Header'

class App extends Component {
	state = {};
	componentDidMount() {
		const {keepLoginAction} = this.props
    const token = localStorage.getItem("token")
		if (token) {
			keepLoginAction();
		}
	}

  render() { 
    return ( 
      <div>
        <Header />
        {/* <SideBar /> */}
        <Route path='/login' component={LoginPage} />
        <Route path='/cartpage' component={CartPagee} />
        <Route path='/forgetpage' component={ForgetPage} />
        <Route path='/change-password' component={ChangePassPage} />
        <Route path='/loginadmin' component={LoginAdminPage} />
        {/* <Route path='/admindashboard' component={AdminDashBoard} /> */}
        {/* <Route path='/graphicpage' component={GraphicPage} /> */}
      </div>
     );
  }
}
 
// const mapStateToProps = (state) => {
//   return {
//     userId: state.user.id,
//   }
// }

export default connect(null, {keepLoginAction} )(App)
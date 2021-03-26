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
  AdminDashBoard, 
} from './pages'
import {keepLoginAction} from './redux/actions'
import {Header} from './component'

class App extends Component {
	state = {};
	componentDidMount() {
		const {keepLoginAction} = this.props
    const token = localStorage.getItem("token")
		if (token) {
			keepLoginAction();
		}
	}

  render () {
    // if (roleID === 1) {

      return (
          <div>
            {/* <div> */}
              <Header />
            {/* </div> */}
            {/* <div style={{display: 'flex'}}> */}
              <div>
                {/* <SideBar /> */}
              </div>
            {/* <div style={{flex: 1}}> */}
              <Route path='/login' component={LoginPage} />
              <Route path='/cartpage' component={CartPagee} />
              <Route path='/forgetpage' component={ForgetPage} />
              <Route path='/change-password' component={ChangePassPage} />
              <Route path='/loginadmin' component={LoginAdminPage} />
              <Route path='/admindashboard' component={AdminDashBoard} />
              {/* <Route path='/graphicpage' component={GraphicPage} /> */}
            {/* </div> */}
          {/* </div> */}
        </div>
      )
    // }
  }
}

  // render() { 
  //   return ( 
  //     <div>
  //       <div>
  //         <Header />
  //       </div>
  //       <div>
  //         <div>

  //         </div>
  //         <SideBar />
  //       </div>
  //     <div>
  //       <Route path='/login' component={LoginPage} />
  //       <Route path='/cartpage' component={CartPagee} />
  //       <Route path='/forgetpage' component={ForgetPage} />
  //       <Route path='/change-password' component={ChangePassPage} />
  //       <Route path='/loginadmin' component={LoginAdminPage} />
  //       {/* <Route path='/admindashboard' component={AdminDashBoard} /> */}
  //       {/* <Route path='/graphicpage' component={GraphicPage} /> */}
  //     </div>
  //   </div>
  //    );
  // }
 
// const mapStateToProps = (state) => {
//   return {
//     userId: state.user.id,
//   }
// }

export default connect(null, {keepLoginAction} )(App)
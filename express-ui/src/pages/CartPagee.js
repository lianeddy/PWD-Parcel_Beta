import React, { Component } from "react"
import { connect } from "react-redux"
import {
  checkOutAction,
  getCartByIdAction,
} from "../redux/actions"
import { Button, Table } from "reactstrap"
import { Redirect } from "react-router-dom"

class CartPage extends Component {
  state = {
    redirectHome: false,
  }

  componentDidMount() {
    const { getCartByIdAction, userID } = this.props;
    getCartByIdAction(userID);
  }

  componentDidUpdate(prevProps) {
    const { userID, getCartByIdAction } = this.props;
    if (prevProps.userID !== userID) {
      getCartByIdAction(userID);
    }
  }

  renderGrandTotal = () => {
    const { cartList } = this.props
    let output = 0
    cartList.forEach((val) => {
      output += val.quantity * val.price;
    })
    return output;
  }

  checkOut = () => {
    const checkOutBool = window.confirm("Confirm CheckOut?")
    if (checkOutBool) {
      const { cartList, userID, checkOutAction } = this.props;
      const date = new Date()
      let day = date.getDate()
      let month = date.getMonth() + 1
      let year = date.getFullYear()

      const checkOutData = {
        date: `${day}-${month}-${year}`,
        total: this.renderGrandTotal(),
        items: cartList,
        userID: userID,
        status: "belum di bayar",
      }
      checkOutAction(checkOutData)
      this.setState({
        redirectHome: true,
      })
    }
  }

  renderTableBody = () => {
    return this.props.cartList.map((val, index) => {
      return (
        <tr>
          <td>{index + 1}</td>
          <td>{val.productName}</td>
          <td>
            <img src={val.image} alt={`${val.name}.jpg`} height="150px" />
          </td>
          <td>
            <Button>
              -
            </Button>
            <span className="mx-2">{val.quantity}</span>
            <Button>
              +
            </Button>
          </td>
          <td>Rp.{((val.quantity * val.price).toLocaleString()}</td>
          <td>
            <Button color="danger">
              Delete
            </Button>
          </td>
        </tr>
      );
    });
  };

  render () {
    const {redirectHome} = this.state
    const {cartList} = this.props
    if(redirectHome) {
      return <Redirect to="/" />
    } else if (cartList.length === 0) {
      return (
        <div>
          <div>
            Cart empty
          </div>
        </div>
      )
    }
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{this.renderTableBody()}</tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td>Grand Total</td>
              <td>Rp. {this.renderGrandTotal().toLocaleString()}</td>
              <td>
                <Button outline color="warning" onClick={this.checkOut}>
                  Checkout
                </Button>
              </td>
            </tr>
          </tfoot>
       </Table>
      </div>
    )
  }
}

const mapStateToProps = ({user, cart, products}) => {
  return {
    userID: user.id,
    cartList: cart.cart,
    // productList: products.productList,
  }
}

export default connect(mapStateToProps, {
  getCartByIdAction,
  checkOutAction,
})(CartPage)

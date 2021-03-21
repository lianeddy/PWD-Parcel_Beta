import React, { Component } from "react";
import queryString from "querystring";
import { connect } from "react-redux";
import {
  fetchProductByIdAction,
  addToCartAction,
  editCartAction,
} from "../redux/actions";
import { Button } from "reactstrap";
import { api_url } from "../helpers";



class ProductDetail extends Component {
  state = {
    data: {},
    qtySelected: 1,
  };

  componentDidMount() {
    const { fetchProductByIdAction } = this.props;
    const productID = queryString.parse(this.props.location.search)["?id"];
    // console.log(productID);
    fetchProductByIdAction(productID);
  }

  increaseQty = () => {
    this.setState({
      qtySelected: this.state.qtySelected + 1,
    });
  };

  decreaseQty = () => {
    this.setState({
      qtySelected: this.state.qtySelected - 1,
    });
  };
  addToCart = () => {
    const {
      productById,
      userID,
      addToCartAction,
      cartList,
      editCartAction,
    } = this.props;
    const { qtySelected } = this.state;
    const { id, isAvailable } = productById;
    if (userID === 0) {
      alert("Please login before making a purchase");
    } else {
      const duplicate = cartList.find((val) => val.productID === id);
      if (!duplicate) {
        const dataCart = {
          quantity: qtySelected,
          userID,
          productID: id,
        };
        addToCartAction(dataCart);
      } else {
        if (duplicate.qty + qtySelected > isAvailable) {
          alert("not enough stock");
        } else {
          editCartAction({
            id: duplicate.id,
            qty: duplicate.qty + qtySelected,
            userID,
          });
        }
      }
    }
  };

  render() {
    const { productName, price, isAvailable,description, imagepath } = this.props.productById;
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div>
             
                <img src={imagepath ? `${api_url}${imagepath}`: null} alt={`${productName}.jpg`} height="300px" />
              
            </div>
          </div>
          <div className="col-8">
            <div>
              <h1>{productName}</h1>
            </div>
            <div>
              <h4>Rp. {price ? price.toLocaleString() : null}</h4>
            </div>
            <div>Available: {isAvailable}</div>
            <div>
            Description : {description}
            </div>
            <div>
            <Button
                color="info"
                onClick={this.decreaseQty}
                disabled={this.state.qtySelected === 1}
              >
                -
              </Button>
              {this.state.qtySelected}
              <Button
                color="info"
                onClick={this.increaseQty}
                disabled={this.state.qtySelected === isAvailable}
              >
                +
              </Button>
            </div>
            <div>
              <Button color="info" onClick={this.addToCart}>
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = ({ product, user, cart }) => {
  return {
    cartList: cart.cart,
    productById: product.productById,
    userID: user.id,
  };
};

export default connect(mapStatetoProps, {
  fetchProductByIdAction,
  addToCartAction,
  editCartAction,
})(ProductDetail);

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
              <Button color="info">
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
    productById: product.productById,
    userID: user.id,
    cartList: cart.cart,
  };
};

export default connect(mapStatetoProps, {
  fetchProductByIdAction,
  addToCartAction,
  editCartAction,
})(ProductDetail);

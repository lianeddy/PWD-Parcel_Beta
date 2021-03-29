import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchProductsAction,
  fetchCategoriesAction,
  fetchbyCategoryAction,
  fetchProductsActionan
} from "../redux/actions";
import Select from "react-select";
import { CarouselPage, ProductCard } from "../components";
import { Link } from "react-router-dom";
import { Form, Spinner } from "reactstrap";
import { api_url } from "../helpers/api_url";
import { FormGroup, Input } from "@material-ui/core";
import { PaginationPage } from ".";

class ProductPage extends Component {
  state = {
    selectedCategory: "",
    hargamin: 1000,
    hargamax: 500000,
  };

  componentDidMount() {
    const { fetchCategoriesAction, fetchProductsActionan } = this.props;
    let { hargamax, hargamin } = this.state;
    fetchCategoriesAction();
    fetchProductsActionan(hargamax, hargamin);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("did update");
    if (prevState.selectedCategory !== this.state.selectedCategory) {
      this.props.fetchbyCategoryAction(this.state.selectedCategory);
    }
  }

  renderCategoryList = () => {
    const { categories } = this.props;
    let newArr = categories.map((val) => {
      // console.log(newArr);
      return { value: val.id, label: val.category };
    });
    return <Select options={newArr} onChange={this.onChangeCategory} />;
  };

  onChangeCategory = (e) => {
    this.setState({
      selectedCategory: e.value,
    });
    console.log(this.state.selectedCategory);
  };

  renderProductList = () => {
    const { productList } = this.props;
    console.log(productList);
    return productList.map((val) => {
      return (
        <div className="m-2">
          <Link to={`/product-detail?id=${val.id}`}>
            <ProductCard
              imagePath={`${api_url}${val.imagePath}`}
              productName={val.productName}
              price={val.price}
            />
          </Link>
        </div>
      );
    });
  };

  onChangeMin = (e) => {
    const value = e.target.value;
    this.setState([value], () => {
      let { value } = this.state;
      fetchProductsAction(parseInt(value));
    });
    console.log(e.target.value);
  };
  onChangeMax = (e) => {
    const value = e.target.value;
    this.setState([value], () => {
      let { value } = this.state;
      fetchProductsAction(value);
    });
    console.log(e.target.value);
  };

  onSearchBtn = () => {
    let { hargamin, hargamax } = this.props;
    fetchProductsAction(hargamin, hargamax);
  };

  render() {
    if (this.props.loading) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spinner color="danger" />
        </div>
      );
    }
    return (
      <div>
        <CarouselPage />
        <div className="row">
          <div className="col-1 offset-11">
            <div>
              <h5>Categories</h5>
            </div>
            <div>{this.renderCategoryList()}</div>
          </div>

          <div
            className="col-10 "
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {this.renderProductList()}
          </div>
          <div>
            <header className="headerbg d-flex">
              <div className="container my-auto">
                <div className="row">
                  <div className="offset-0 col-3 offset-lg-9 col-lg-4">
                    <div id="search-form-div" className="container">
                      <div className="row">
                        <div className="col-5 mb-8">
                          <h5>Search</h5>
                          <Form>
                            <div className="mb-2">
                              <FormGroup>
                                <Input
                                  placeholder="Min Price"
                                  type="select"
                                  name="select4"
                                  id="select3"
                                  value={this.setState.hargamin}
                                  onChange={this.onChangeMin}
                                  style={{
                                    width: "100px",
                                    paddingTop: "2px",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    borderColor: "success",
                                  }}
                                ></Input>
                              </FormGroup>
                            </div>
                            <div className="mb-6">
                              <FormGroup>
                                <Input
                                  placeholder="Max Price"
                                  type="select"
                                  name="select4"
                                  id="select4"
                                  value={this.setState.hargamax}
                                  onChange={this.onChangeMax}
                                  style={{
                                    width: "100px",
                                    paddingTop: "2px",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    borderColor: "success",
                                  }}
                                ></Input>
                              </FormGroup>
                            </div>
                            <div
                              className="col-2 mb-6"
                              style={{ marginTop: 10 }}
                            >
                              <FormGroup>
                                <Input
                                  type="submit"
                                  name="search"
                                  id="search"
                                  className="btn btn-success"
                                  style={{
                                    padding: 1,
                                    width: 75,
                                    color: "white",
                                  }}
                                  value="Filter"
                                  onClick={this.onSearchBtn}
                                />
                              </FormGroup>
                            </div>
                            <div className="mb-6">
                              <FormGroup>
                                <Input
                                  placeholder="Search"
                                  type="select"
                                  name="select4"
                                  id="select4"
                                  value={this.setState.data}
                                  onChange={this.onChangeCategory}
                                  style={{
                                    width: "100px",
                                    paddingTop: "2px",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    borderColor: "success",
                                  }}
                                ></Input>
                              </FormGroup>
                            </div>
                            <div
                              className="col-2 mb-6"
                              style={{ marginTop: 10 }}
                            >
                              <FormGroup>
                                <Input
                                  type="submit"
                                  name="search"
                                  id="search"
                                  className="btn btn-success"
                                  style={{
                                    padding: 1,
                                    width: 75,
                                    color: "white",
                                  }}
                                  value="Search"
                                  onClick={this.onSearchBtn}
                                />
                              </FormGroup>
                            </div>
                          </Form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <PaginationPage />
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    categories: state.product.categories,
    productList: state.product.productList,
    loading: state.product.loading,
    
  };
};

export default connect(mapStatetoProps, {
  fetchCategoriesAction,
  fetchProductsAction,
  fetchbyCategoryAction,
  fetchProductsActionan
})(ProductPage, PaginationPage);

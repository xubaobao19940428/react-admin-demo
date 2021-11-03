import React, { Component } from "react";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return <div className="product-module">商品页</div>;
  }
}
export default ProductList;

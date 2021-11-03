import React, { Component } from "react";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return <div className="home-module">商品详情页</div>;
  }
}
export default ProductDetail;

import React, { Component } from "react";

class OrderList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return <div className="home-module">订单页</div>;
  }
}
export default OrderList;

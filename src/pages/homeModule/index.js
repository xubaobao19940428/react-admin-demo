import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return <div className="home-module">首页</div>;
  }
}
export default Home;

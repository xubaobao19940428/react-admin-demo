import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  shouldComponentUpdate() {
    return true;
  }
  render() {
    return <div className="login-module">登录</div>;
  }
}
export default Login;

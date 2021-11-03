/**
 * 这里保留App.js是为了全局的方法只处理一次
 */
import React from "react";
import "./App.css";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
// import { getServerTime } from "@/api";
import Routers from "./router";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    //  getServerTime().then(resultes=>{
    //    if(resultes.status==='success'){
    //      sessionStorage.setItem('serveTime',resultes.data.time)
    //    }
    //  })
  }
  render() {
    return (
      <div className="App">
        <HashRouter>{renderRoutes(Routers)}</HashRouter>
      </div>
    );
  }
}

export default App;

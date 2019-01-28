// https://www.youtube.com/watch?time_continue=7&v=wPQ1-33teR4

import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// import components
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Routes />
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;

// Question
// 1. What is react fragment?

// REACT-ROUTE-DOM
// 1. What is Switch?
// 2. What is exact?

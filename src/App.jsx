/* eslint-disable */
import React, { Component } from "react";
import "whatwg-fetch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import Content from "./Content";
import Profile from "./Profile";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <HeaderContainer />
          <Route exact path="/" component={Content} />
          <Route path="/profile" component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;

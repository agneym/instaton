/* eslint-disable */
import React, {Component} from 'react';
import { Container } from 'semantic-ui-react';
import 'whatwg-fetch';
import HeaderContainer from './HeaderContainer';
import Content from './Content';
class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <main>
        <HeaderContainer />
        <Content />
      </main>
    );
  }

}

export default App;
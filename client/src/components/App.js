import React, { Component } from 'react';

// import Header from './Header';
// import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Hello World!',
    };
  }

  render() {
    return (
      <div>
        {this.state.text}
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import Main from './components/Main';
import Navbar from './components/Navbar';
import Greet from './components/Greet';
import Content from './components/Content';
class App extends React.Component {

  render() {
    return (
        <div className="App">
            <Greet />
            <Navbar />
              <Main />
        </div>
    );
  }
}


export default App;

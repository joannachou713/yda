import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"
import { route } from "./route";

const routes = route();

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        {routes}
        <Footer />
      </React.Fragment >
    );
  }
}

export default App;

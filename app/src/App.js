import React, { Component } from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import './App.css';
import Main from './components/main/Main'


class App extends Component {
  render() {
    return (
      <div>

        <Header />


          <Main />

        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';

import Header from './components/Header';
// import MainPage from './pages/MainPage';
// import DetailsPage from './pages/DetailsPage';
// import LoadingPage from './pages/LoadingPage';

import './css/App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

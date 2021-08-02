import React, { Component } from 'react';

import Header from './components/Header';
import MainPage from './Pages/MainPage';
// import DetailsPage from './pages/DetailsPage';
// import LoadingPage from './pages/LoadingPage';

import './css/App.css';

import { data } from './data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage products={data} />
      </div>
    );
  }
}

import React, { Component } from 'react';

import Header from './components/Header';
import MainPage from './Pages/MainPage';
import DetailsPage from './Pages/DetailsPage';

import './css/App.css';

import { data, details } from './data';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage products={data} />
        <DetailsPage product={details} />
      </div>
    );
  }
}

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import MainPage from './Pages/MainPage';
import DetailsPage from './Pages/DetailsPage';

import './css/App.css';

import { searchProductByText } from './service/API';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
    this.onClick = this.onClick.bind(this);
  }

  async onClick(searchText) {
    const { results } = await searchProductByText(searchText);
    this.setState({ data: results });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App">
        <Header onClick={this.onClick} />
        <Switch>
          <Route path="/details/:id" component={DetailsPage} />
          <Route path="/" render={() => <MainPage products={data} />} />
        </Switch>
      </div>
    );
  }
}

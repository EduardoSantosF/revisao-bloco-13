import React, { Component } from 'react';
import mercadoTrybe from '../images/mercadoTrybe.png';
import trybeLogo from '../images/trybeLogo.png';
import searchIcon from '../images/searchIcon.png';
import '../css/Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
    };
    this.onType = this.onType.bind(this);
  }

  onType(event) {
    const { target: { value } } = event;
    this.setState({ searchText: value });
  }

  render() {
    const { searchText } = this.state;
    const { onClick } = this.props;
    return (
      <header>
        <div>
          <img src={trybeLogo} alt="Trybe logo" className="header-img logo" />
          <img src={mercadoTrybe} alt="mercado trybe title" className="header-img title" />
        </div>
        <input
          type="text"
          placeholder="Buscar produtos, marcas e muito mais…"
          value={searchText}
          onChange={this.onType}
        />
        <button type="button" onClick={() => onClick(searchText)}>
          <img src={searchIcon} alt="search icon" />
        </button>
      </header>
    );
  }
}

export default Header;

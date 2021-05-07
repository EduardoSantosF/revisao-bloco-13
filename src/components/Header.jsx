import React, { Component } from 'react';
import mercadoTrybe from '../images/mercadoTrybe.png';
import trybeLogo from '../images/trybeLogo.png';
import searchIcon from '../images/searchIcon.png';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={trybeLogo} alt="Trybe logo" className="header-img logo" />
          <img src={mercadoTrybe} alt="mercado trybe title" className="header-img title" />
        </div>
        <input type="text" placeholder="Buscar produtos, marcas e muito mais…" />
        <button type="button">
          <img src={searchIcon} alt="search icon" />
        </button>
      </header>
    );
  }
}

export default Header;

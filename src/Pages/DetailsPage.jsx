import React, { Component } from 'react';
import ProductAttributes from '../components/ProductAttributes';

import '../css/DetailsPage.css';

export default class DetailsPage extends Component {
  render() {
    const {
      product: {
        warranty, attributes, thumbnail, price, title,
      },
    } = this.props;
    return (
      <div className="product-details-card">
        <div className="product-details">
          <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
          <div className="product-details-info">
            <a href="/">Voltar para tela inicial</a>
            <h2>{title}</h2>
            <span>{warranty}</span>
            <span>R${price.toLocaleString()}</span>
          </div>
        </div>
        <ProductAttributes attributes={attributes} />
      </div>
    );
  }
}

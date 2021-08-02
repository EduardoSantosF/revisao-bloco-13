import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductAttributes from '../components/ProductAttributes';

import '../css/DetailsPage.css';
import { getProductById } from '../service/API';
import LoadingPage from './LoadingPage';

export default class DetailsPage extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProductById(id).then((product) => this.setState({ product }));
  }

  render() {
    if (!this.state) return <LoadingPage />;

    const {
      product: {
        warranty, attributes, thumbnail, price, title,
      },
    } = this.state;

    return (
      <div className="product-details-card">
        <div className="product-details">
          <img src={thumbnail.replace('I.jpg', 'F.jpg')} alt="product" />
          <div className="product-details-info">
            <Link to="/">Voltar para tela inicial</Link>
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

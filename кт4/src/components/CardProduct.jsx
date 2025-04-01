import React from 'react';
import { Link } from 'react-router-dom';
import Stars from './StarsRating';
import '../index.css';

function Card({ product }) {
  return (
    <article className="card-product">
      <header>
        <h3>
          <Link to={`/product/${product.id}`}>{product.title}</Link>
        </h3>
      </header>
      <section>
        <Stars rating={product.rating.rate} />
      </section>
    </article>
  );
}

export default Card;
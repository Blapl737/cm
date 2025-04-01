import React from "react";
import Stars from "./Stars";

const ProductCard = ({ product, onDelete }) => {
  const handleDelete = () => onDelete(product.id);

  return (
    <article
      className="card"
      onDoubleClick={handleDelete}
    >
      <figure>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className="image" 
        />
      </figure>
      <header>
        <h2>{product.title}</h2>
      </header>
      <section>
        <p>Price: ${product.price}</p>
        <Stars rating={product.rating} />
      </section>
    </article>
  );
};

export default ProductCard;

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import '../index.css'; 

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  const fetchProduct = async (productId) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const renderRating = (rating) => {
    const fullStars = Math.round(rating);
    const emptyStars = 5 - fullStars;
    return '★'.repeat(fullStars) + '☆'.repeat(emptyStars);
  };

  return (
    <div className="detail-product">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} />
      <p><strong>Price:</strong> {product.price} $</p>
      <p><strong>Description:</strong> {product.description}</p>
      <div className="rating">
        {renderRating(product.rating.rate)}
      </div>
      <button onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default ProductDetail;
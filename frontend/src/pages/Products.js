import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Products.css';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="products">
      <h2>Our Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <img src={product.images[0]} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
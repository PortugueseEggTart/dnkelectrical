import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to DNK Electrical</h2>
      <p>Powering Homes & Businesses with Reliable Electrical Solutions</p>
      <div className="categories">
        <div className="category">
          <img src="/images/laptop.jpg" alt="Laptops" />
          <h3>Laptops</h3>
        </div>
        <div className="category">
          <img src="/images/smartphone.jpg" alt="Smartphones" />
          <h3>Smartphones</h3>
        </div>
        <div className="category">
          <img src="/images/accessory.jpg" alt="Accessories" />
          <h3>Accessories</h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
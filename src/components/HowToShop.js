import React from 'react';
import './HowToShop.css';
import favoriteIcon from './images/favorite-icon.jpg';  // Replace with the correct image
import cartIcon from './images/cart-icon.png';  // Replace with the correct image
import profileIcon from './images/profile-icon.png';  // Replace with the correct image

const HowToShop = () => {
  return (
    <section className="how-to-shop">
      <h2>How to shop</h2>
      <div className="cards-container">
        <div className="shop-card">
          <img src={favoriteIcon} alt="Find your favorite" className="card-image" />
          <h3>Find your favorite</h3>
          <p>Enter your location. Explore local products and connect with sellers.</p>
        </div>
        <div className="shop-card">
          <img src={cartIcon} alt="Add to cart" className="card-image" />
          <h3>Add to cart</h3>
          <p>Select products and add to cart for a seamless shopping experience.</p>
        </div>
        <div className="shop-card">
          <img src={profileIcon} alt="Manage profile" className="card-image" />
          <h3>Manage profile</h3>
          <p>Review order details and proceed to checkout for a hassle-free transaction.</p>
        </div>
      </div>
    </section>
  );
};

export default HowToShop;

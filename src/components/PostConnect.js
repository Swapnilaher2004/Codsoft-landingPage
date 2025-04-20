import React from 'react';
import './PostConnect.css';
import sellerIcon from './images/seller-icon.png'
import partnerIcon from './images/partner-image.png'
import supporterIcon from './images/supporter-icon.png'


const PostConnect = () => {
  return (
    <div className="container">
      <h2>Join IndiaPostConnect</h2>
      <div className="card-container">
        <div className="card">
          <img
            src={sellerIcon}
            alt="Seller"
            className="card-image"
          />
          <h3>As a seller</h3>
          <p>Showcase your products to a global audience. Start selling today.</p>
          <button className="btn">Sell with us</button>
        </div>

        <div className="card">
          <img
            src={partnerIcon}
            alt="Partner"
            className="card-image"
          />
          <h3>As a partner</h3>
          <p>Collaborate with us to promote local craftsmanship and heritage.</p>
          <button className="btn">Partner with us</button>
        </div>

        <div className="card">
          <img
           src={supporterIcon}
            alt="Supporter"
            className="card-image"
          />
          <h3>As a supporter</h3>
          <p>Join us in empowering local sellers and preserving traditional arts.</p>
          <button className="btn">Support us</button>
        </div>
      </div>
    </div>
  );
};

export default PostConnect;

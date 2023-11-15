import React from 'react';
// import './DressDetails.css';

const DressDetails = ({ details }) => {
  return (
    <div className="details-container">
      <h1 className="details-heading">Dress Details</h1>
      <div className="details-content">
        <h2 className="detail-heading">Material</h2>
        <p className="detail">{details.material}</p>

        <h2 className="detail-heading">Care Instructions</h2>
        <p className="detail">{details.careInstructions}</p>

        <h2 className="detail-heading">Brand</h2>
        <p className="detail">{details.brand}</p>

        <h2 className="detail-heading">Origin</h2>
        <p className="detail">{details.origin}</p>

        <h2 className="detail-heading">Garment</h2>
        <p className="detail">{details.garment}</p>

        <h2 className="detail-heading">Size</h2>
        <p className="detail">{details.size}</p>

        <h2 className="detail-heading">Price</h2>
        <p className="detail">{details.price}</p>

        <h2 className="detail-heading">Sustainability Details</h2>
        <p className="detail">{details.sustainability}</p>        
      </div>
    </div>
  );
};

export default DressDetails;

import React from 'react';
import CTAImageAsset from "../../assets/nft-cta-image.png";
import './index.css'

function CTAImage() {
  return (
    <div className='cta-image-container'>
      <div className="image-main-div">
          <img src={CTAImageAsset} alt="" />
        <div className="middle-div">
        </div>
      </div>
    </div>
  )
}

export default CTAImage
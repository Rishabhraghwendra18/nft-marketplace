import React from "react";
import {AppButton,Ellipse} from "../../components";
import "./index.css";

function CTA() {
  const stats = [
    {
      statsName:'Collections',
      value:'450k+'
    },
    {
      statsName:'Artist',
      value:'320K+'
    },
    {
      statsName:'Community',
      value:'15K+'
    },
  ]
  return (
    <div className="cta-container">
      <div className="cta">
        <div className="cta-headline-tagline">
          <h1 className="cta-text">
            Be one of the first 3 people to buy this{" "}
            <Ellipse style={{position:'absolute',top:0,right:'3rem'}}/>
            <span className="nft-text">NFT</span>
          </h1>
          <h2 className="tagline">
            {" "}
            and get a 10$ bonus along with the purchase
          </h2>
          <div className="cta-button">
          <h2 className="nft-price">the price of <br/>this NFT : <s>$23</s> <span className="price">$18</span></h2>
          <AppButton style={{height:'50px',marginTop:'auto'}}>Mint Now</AppButton>
          </div>
        </div>
        <div className="nft-community-stats">
          {stats.map((stat,index)=>(
          <div className="stats" key={index}>
            <h3>{stat.statsName}</h3>
            <h1>{stat.value}</h1>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CTA;

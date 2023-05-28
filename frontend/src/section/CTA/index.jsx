import React,{useState} from "react";
import {AppButton,Ellipse,AppModal} from "../../components";
import "./index.css";

function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  ];
  const handleOpenModal = ()=>{
    setIsModalOpen(true);
  }
  const handleCloseModal = () =>{
    setIsModalOpen(false);
  }
  return (
    <div className="cta-container">
      <div className="cta">
        <div className="cta-headline-tagline">
          <h1 className="cta-text">
          Free NFT Minting Hub: Empowering Beginners,{" "}
            <Ellipse style={{position:'absolute',top:0,right:'3rem'}}/>
            <span className="nft-text">Igniting Digital Creativity</span>
          </h1>
          <h2 className="tagline">
            {" "}
            Unleash Your Artistic Potential, Transforming Ideas into Immutable Tokens!
          </h2>
          <div className="cta-button">
          <h2 className="nft-price">the price of <br/>minting : <s>$23</s> <span className="price">$0</span></h2>
          <AppButton style={{height:'50px',marginTop:'auto'}} onClick={handleOpenModal}>Mint Now</AppButton>
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
      <AppModal open={isModalOpen} handleClose={handleCloseModal}/>
    </div>
  );
}

export default CTA;

import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { alpha, styled } from "@mui/material/styles";
import { useSnapshot } from 'valtio';
import state from '../../store';
import { connectWallet } from '../../utils';
import AppButton from '../Button';
import Logo from "../../assets/Variant2.png";
import './index.css';

const CustomButton = styled(Button)(({ theme }) => ({
   fontFamily:'Poppins',
   fontWeight:500,
   fontSize:'20px'
}));

const Navbar = () => {
  const snap = useSnapshot(state);
  // const connectWallet = async () =>{
  //   if(snap.walletConnect !== undefined){
  //     await snap.walletConnect();
  //   }
  // }
  return (
    <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none',paddingTop:'1rem' }}>
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          {/* Your navbar logo */}
          <img src={Logo} alt="Logo" />
        </div>
        <div className='navbar-buttons'>
          {/* Navbar buttons */}
          <div className="menu-options">
          <CustomButton color="inherit">Collection</CustomButton>
          <CustomButton color="inherit">Community</CustomButton>
          <CustomButton color="inherit">About</CustomButton>
          </div>
          <AppButton onClick={connectWallet}>{
            snap.walletAddress ?`${snap.walletAddress?.slice(0,5)}...${snap.walletAddress?.slice(-3)}` : "Connect Wallet"
          }</AppButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

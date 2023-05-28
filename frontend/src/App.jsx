import React,{ useState } from 'react'
import {Snackbar} from '@mui/material';
import MuiAlert from '@mui/material/Alert';
import { useSnapshot } from 'valtio';
import state from './store';
import { Navbar,Ellipse } from './components'
import { CTA, CTAImage,Collections } from './section'
import Logo from "./assets/Variant2.png";
import './App.css'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const snap = useSnapshot(state);
  const collections = [
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
    {
      image:Logo,
      name:'dummy',
      description:'dummy dummy'
    },
  ]
  return (
    <>
      <Ellipse style={{position:'absolute',top:'-0.7rem',left:'-0.6rem'}}/>
      <Navbar/>
      <div className="hero-section">
        <CTA/>
        <CTAImage/>
      </div>
      {collections.length > 0 && (
        <Collections collections={collections}/>
      )}
      <Ellipse style={{position:'absolute',bottom:'-4rem',right:'-4rem'}}/>
      <Snackbar open={snap.isUploadingToIPFS} autoHideDuration={6000} onClose={()=>{}}>
        {snap.isUploadingToIPFS && (
        <Alert onClose={()=>{}} severity="info" sx={{ width: '100%' }}>
          Uploading NFT metadata to IPFS
        </Alert>
        )}
        {snap.isMinting && (
        <Alert onClose={()=>{}} severity="info" sx={{ width: '100%' }}>
          Minting NFT on Blockchain
        </Alert>
        )}
        {snap.isMinted && (
        <Alert onClose={()=>{}} severity="success" sx={{ width: '100%' }}>
          NFT successfully minted
        </Alert>
        )}
      </Snackbar>
    </>
  )
}

export default App

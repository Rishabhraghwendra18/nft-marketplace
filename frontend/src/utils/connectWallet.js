import state from "../store";
import { ethers } from 'ethers';

const connectWallet = async () =>{
    if(window.ethereum){
      const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      state.provider = provider;
      state.signer = signer;
      state.walletAddress = walletAddress[0];
    }
    else{
      alert("Your browser don't have metamask installed. Please install it first.")
    }
}
export default connectWallet;
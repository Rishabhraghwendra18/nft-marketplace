import state from "../store";
import { ethers } from 'ethers';

const connectWallet = async () =>{
    if(window.ethereum){
      // ethers.js way

      const walletAddress = await window.ethereum.request({ method: 'eth_requestAccounts'});
      state.walletAddress = walletAddress[0];

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const {chainId} = await provider.getNetwork();
      console.log("chainID: ",chainId)
      if(chainId !== 11155111){
        await ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0xaa36a7'}],
        });
      }
    }
    else{
      alert("Your browser don't have metamask installed. Please install it first.")
    }
}
export default connectWallet;
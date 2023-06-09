import {proxy} from 'valtio';

const state = proxy({
    provider:{},
    signer:{},
    walletAddress:'',
    isUploadingToIPFS:false,
    isMinting:false,
    isMinted:false,
    walletConnect:undefined,
    collections:[]
});

export default state;
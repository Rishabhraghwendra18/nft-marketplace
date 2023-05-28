// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFTMarket is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping (address => string) addressToTokenURI;

    constructor() ERC721("NFT.Market", "NFTM") {}

    function mint(address _address, string memory tokenURI)
        public
        returns (uint256)
    {
        uint256 newItemId = _tokenIds.current();
        _mint(_address, newItemId);
        _setTokenURI(newItemId, tokenURI);
        addressToTokenURI[_address] = tokenURI;

        _tokenIds.increment();
        return newItemId;
    }
    function getTokenURI(address _userAddress) public view returns (string memory) {
        return addressToTokenURI[_userAddress];
    }
}
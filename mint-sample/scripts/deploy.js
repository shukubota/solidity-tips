const { ethers } = require('hardhat');

async function main() {
    const MyNFT = await ethers.getContractFactory('MyNFT');
    const myNFT = await MyNFT.deploy(); // Instance of the contract
    console.log('Contract deployed to address:', myNFT.address);
}
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});

// WARNING: These accounts, and their private keys, are publicly known.
// Any funds sent to them on Mainnet or any other live network WILL BE LOST.

// Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80
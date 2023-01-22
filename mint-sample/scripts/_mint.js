const hre = require('hardhat');
const Web3 = require('web3');
const Config = require('../config/default.json');
const { createAlchemyWeb3 } = require('@alch/alchemy-web3');
const Contract = require('../artifacts/contracts/MyNFT.sol/MyNFT.json');

async function main() {
  // console.log(hre)
  console.log(hre.network)
  console.log(hre.network.name)
  const config = Config[hre.network.name];
  console.log({ config })

  const web3 = createAlchemyWeb3(config.provider_url);
  const contract = new web3.eth.Contract(Contract.abi, config.contract.address);
  const nonce = await web3.eth.getTransactionCount(config.public_key, 'latest');

  const tx = {
    from: config.public_key,
    to: config.contract.address,
    nonce: nonce,
    gas: 500000,
    data: contract.methods.mint(config.public_key).encodeABI(),
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    tx,
    config.private_key
  );
  const transactionReceipt = await web3.eth.sendSignedTransaction(
    signedTx.rawTransaction
  );
  console.log(`Transaction Hash: ${transactionReceipt.transactionHash}`);
}
main();
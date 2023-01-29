/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
module.exports = {
  solidity: "0.8.4",
  networks: {
    localhost: {
      chainId: 31337,
      url: "http://127.0.0.1:8545",
    },
    // goerli: {
    //   url: "https://eth-goerli.g.alchemy.com/v2/H4aiCCamXTXUdzj2_u5Bth8eBVYlmGcy",
    //   accounts: ["ここに秘密鍵"],
    // },
    // mainnet: {
    //   url: "Alchemyで得たEthereumのmainnetのURL",
    //   accounts: "自分のウォレットの秘密鍵",
    // },
  },
};

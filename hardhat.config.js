require("dotenv").config();
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.9",
  networks: {
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
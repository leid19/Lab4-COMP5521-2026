require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const accounts = [process.env.ALICE_PRIVATE_KEY, process.env.BOB_PRIVATE_KEY, process.env.PRIVATE_KEY]
  .filter(Boolean)
  .filter((value, index, values) => values.indexOf(value) === index);

module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY || "",
  },
};

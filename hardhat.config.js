require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const { deploy_keys } = require("./secrets.json");

task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {},
    // testnet: {
    //   url: "https://data-seed-prebsc-1-s1.binance.org:8545",
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts: [`0x${deploy_keys.testnet_key}`],
    // },
    // mainnet: {
    //   url: "https://bsc-dataseed1.binance.org:443",
    //   chainId: 56,
    //   gasPrice: 20000000000,
    //   accounts: [`0x${deploy_keys.mainnet_key}`],
    // },
  },
  solidity: {
    version: "0.8.1",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};

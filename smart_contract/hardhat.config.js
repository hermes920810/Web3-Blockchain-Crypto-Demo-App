// https://eth-ropsten.alchemyapi.io/v2/8uV9Q871avMXOStw4IMHLHeGHhs4HP7Q

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/8uV9Q871avMXOStw4IMHLHeGHhs4HP7Q",
      accounts: [
        "e14c53a865e9906e63e9588ef9b4a3e3aaafd07ae957580bbfa0430ba0926848",
      ],
    },
  },
};

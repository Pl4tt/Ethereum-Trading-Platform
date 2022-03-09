require("@nomiclabs/hardhat-waffle");

const privateKey = "SECRET";
const httpUrl = "SECRET";

module.exports = {
	solidity: "0.8.0",
	networks: {
		ropsten: {
			url: httpUrl,
			accounts: [privateKey],
		},
	},
};

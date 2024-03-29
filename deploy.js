// const HDWalletProvider = require("@truffle/hdwallet-provider");
// const Web3 = require("web3");
// const { interface, bytecode } = require("./compile");

// const provider = new HDWalletProvider(
//   "arrange loud ghost blood father paper hockey feature march joke differ hurt",
//   "https://rinkeby.infura.io/v3/8e73eb9ab02c46d4a45209fde379e41a"
// );
// const web3 = new Web3(provider);

// const deploy = async () => {
//   const accounts = await web3.eth.getAccounts();

//   console.log("Attempting to deploy from account", accounts[0]);

//   const result = await new web3.eth.Contract(JSON.parse(interface))
//     .deploy({ data: bytecode })
//     .send({ gas: "1000000", from: accounts[0] });

//   console.log("Contract deployed to", result.options.address);
//   console.log(interface);
//   provider.engine.stop();
// };
// deploy();

const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  "arrange loud ghost blood father paper hockey feature march joke differ hurt",
  "https://rinkeby.infura.io/v3/8e73eb9ab02c46d4a45209fde379e41a"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object })
    .send({ gas: "1000000", from: accounts[0] });

  console.log(JSON.stringify(abi));
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();

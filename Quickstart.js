// Install Node.js and npm on your computer if you haven't already done so.
// Clone the XDC SDK repository from Github: https://github.com/xdvplatform/XDC-JS
// In the project directory, run npm install to install the required dependencies.
// Create a new file named app.js and add the following code to deploy a simple smart contract:

const Xdc = require('xdc.js');
const web3 = new Xdc(new Xdc.providers.HttpProvider("http://localhost:8545"));

const contractAbi = [{
  "constant": false,
  "inputs": [
    {
      "name": "message",
      "type": "string"
    }
  ],
  "name": "setMessage",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": true,
  "inputs": [],
  "name": "getMessage",
  "outputs": [
    {
      "name": "",
      "type": "string"
    }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
const contractAddress = "0x1234..."; // Replace with your contract address

const contract = new web3.eth.Contract(contractAbi, contractAddress);

const message = "Hello World!";

web3.eth.getAccounts().then(function(accounts) {
  const from = accounts[0];
  contract.methods.setMessage(message).send({from: from})
    .then(function() {
      console.log(`Message set to: ${message}`);
    });
});


// Run node app.js in the terminal to deploy the contract and set the message to "Hello World!

// Check the transaction status in your XDC wallet or on a blockchain explorer
// Congratulations, you have deployed your first smart contract using the XDC SDK

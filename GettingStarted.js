// Getting Started
// To get started with the XDC SDK, you will need to have a basic understanding of blockchain technology, smart contracts, and JavaScript/TypeScript programming language. You will also need to have the following software installed on your machine:

// Node.js (v10 or higher)
// npm (v6 or higher)
// Once you have these prerequisites installed, you can follow these steps to start using the XDC SDK:

// 1. Install the XDC SDK package via npm: npm install xdc-sdk
// 2. Import the package in your JavaScript/TypeScript file: import XdcSdk from 'xdc-sdk'
// 3. Create a new instance of the SDK by passing in the XDC network URL: const xdc = new XdcSdk('https://rpc.apothem.network')
// 4. Use the SDK methods to interact with the XDC network, such as deploying smart contracts, managing account keys, and subscribing to events.

// Here is a sample code snippet to deploy a smart contract using the XDC SDK:
const fs = require('fs');
const path = require('path');

// Read the smart contract file
const contractFile = fs.readFileSync(path.join(__dirname, 'MyContract.sol'), 'utf8');

// Deploy the contract to the XDC network
const contract = await xdc.deployContract(contractFile, {
  from: '0x1234567890abcdef1234567890abcdef12345678',
  gas: 1000000,
  gasPrice: '1000000000000',
});

console.log(`Contract deployed at address: ${contract.address}`);

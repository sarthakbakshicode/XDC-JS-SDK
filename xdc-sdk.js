const Xdc3 = require('xdc3');

const xdc3 = new Xdc3(new Xdc3.providers.HttpProvider('https://rpc.apothem.network'));

// get balance of an address
async function getBalance(address) {
  try {
    const balance = await xdc3.eth.getBalance(address);
    console.log(`Balance of ${address}: ${balance}`);
    return balance;
  } catch (error) {
    console.error(`Error getting balance for ${address}: ${error}`);
  }
}

// deploy a smart contract
async function deployContract(contractCode, contractArgs) {
  try {
    const contract = new xdc3.eth.Contract(contractCode.abi);
    const deploy = contract.deploy({ data: contractCode.bytecode, arguments: contractArgs });
    const accounts = await xdc3.eth.getAccounts();
    const gas = await deploy.estimateGas({ from: accounts[0] });
    const deployedContract = await deploy.send({ from: accounts[0], gas: gas });
    console.log(`Deployed contract at address: ${deployedContract.options.address}`);
    return deployedContract;
  } catch (error) {
    console.error(`Error deploying contract: ${error}`);
  }
}

// manage account keys
const account = xdc3.eth.accounts.create();

// subscribe to an event
async function subscribeToEvent(eventName, callback) {
  try {
    const contract = new xdc3.eth.Contract(contractAbi, contractAddress);
    contract.events[eventName]({ fromBlock: 'latest' }, (error, event) => {
      if (error) {
        console.error(`Error subscribing to event: ${error}`);
      } else {
        console.log(`Received event: ${event}`);
        callback(event);
      }
    });
  } catch (error) {
    console.error(`Error subscribing to event: ${error}`);
  }
}

module.exports = {
  xdc3,
  getBalance,
  deployContract,
  account,
  subscribeToEvent
};

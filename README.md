Introduction (Please note this is still under the works)


Welcome to the  XDC Network SDK documentation. This documentation will guide you through the installation, configuration, and usage of the XDC SDK.

Prerequisites
Before you can start using the XDC SDK, you need to make sure that you have the following prerequisites installed on your machine:

1. Node.js (v12 or higher)
2. Git

Installation
To install the XDC SDK, follow these steps:

1. Open your terminal or command prompt.
2. Clone the XDC SDK repository by running the following command:
git clone https://github.com/xdcecosystem/XDC-JS.git
3. Navigate to the cloned directory:
cd XDC-JS
4. Install the dependencies by running the following command:
npm install
5. You're ready to use the XDC SDK!

Configuration
To configure the XDC SDK, follow these steps:
1. Create a new file called .env in the root directory of the XDC SDK.
2. Add the following configuration parameters to the .env file:
PRIVATE_KEY=<your-private-key>
XDC_NETWORK=https://rpc.apothem.network
Note: Replace <your-private-key> with your XDC account's private key.

Usage
1. Import the SDK into your project:
const XdcSdk = require('xdc-sdk');
2. Initialize the SDK with your private key:
const xdc = new XdcSdk('<your-private-key>');
Note: Replace <your-private-key> with your XDC account's private key.
 3. Use the SDK's methods to interact with the XDC network:
 // Example: Get the balance of an address
const balance = await xdc.getBalance('<address>');
console.log('Balance:', balance);








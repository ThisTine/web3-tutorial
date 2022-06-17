const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { abi, bytecode } = require('../deploy/compiler');
const util = require('util')

// use our real (testnet) wellet and deploy it to Rinkeby testnet
const provider = new HDWalletProvider(
    { mnemonic:
         { phrase: "REPLACE_WITH_YOUR_PHAESE" },
    // use infura external provider to deploy our contract
    providerOrUrl:"REPLACE_WITH_INFARAURL" })

// use our custom provider to connect our wallet and deploy to Rinkeby testnet
const web3 = new Web3(provider)

// create deploy function (need to be async so it can be asynchronous)
const deploy = async ()=>{
    // get all of our accounts in our wallet
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying from ", accounts[0])
    // deploy contract
    const result = await new web3.eth.Contract(abi).deploy({data:bytecode}).send({gas:"1000000",from: accounts[0]})
    console.log('Contract deployed to', result.options.address);
    // stop engine
    // log metadata 
    console.log("here is our contract address --->",result.options.address)
    console.log("here is our contract abi     --->",util.inspect(abi, false, null, true ))
    provider.engine.stop();
}

deploy()
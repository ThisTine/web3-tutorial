const path = require('path')
const fs = require('fs')
const solc = require('solc')

// get inbox.sol contract from folder contracts
const contractPath = path.resolve(__dirname,"contracts","inbox.sol")
const inboxSource = fs.readFileSync(contractPath,"utf-8")

// this is compiler input
const input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: inboxSource
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

// compile Solidity into bytecode
const compiled = JSON.parse(solc.compile(JSON.stringify(input))).contracts["Inbox.sol"]["Inbox"]

// abi is like a meta data of our contract
const abi = compiled.abi
// bytecode of this contract
const bytecode = compiled.evm.bytecode.object

module.exports = {abi,bytecode}
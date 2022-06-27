const path = require('path')
const fs = require('fs')
const solc = require('solc')


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





module.exports = {abi,bytecode}
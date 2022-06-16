// import assert from "assert";
const assert = require("assert");
// import ganache from "ganache";
const ganache = require("ganache") ;
const Web3 =  require("web3");
// import Web3 from 'web3'
// import {abi,bytecode} from "../compiler.js"
const {abi,bytecode} = require('../compiler')

// using ganache provider to provide testing account
const web3 = new Web3(ganache.provider());

let accounts,inbox;

beforeEach(async ()=>{
    // store accounts generated from ganache provider
    accounts = await web3.eth.getAccounts()
    // deploy contract using account 0
    inbox = await new web3.eth.Contract(abi).deploy({data:bytecode}).send({from: accounts[0], gas:"1000000"})

})

// begin testing
describe('inbox', () => { 
    // test that we have valid accounts and contract
    it("deploys a contract",()=>{
        assert.ok(inbox.options.address)
    })
    // test that we can send and view message
    it("Test sending message and calling message", async ()=>{
        // send message from account 1
        await inbox.methods.sendMessage("Hello").send({from: accounts[1]})
        // read all messages
        const messages = await inbox.methods.readmails().call({from: accounts[0]})
        console.log("Messages ------------->",messages)
    })
    // test that we can send money through contract
    it("Test sending money", async ()=>{
        const before = await web3.eth.getBalance(accounts[0])
        console.log("Before sending money ------->",web3.utils.fromWei(before,"ether"))
        // send message with money from account 1
        await inbox.methods.sendMessage("send money").send({from: accounts[1],value: web3.utils.toWei("20","ether")})
        const after = await web3.eth.getBalance(accounts[0])
        console.log("After money send ------>",web3.utils.fromWei(after,"ether"))
    })
 })